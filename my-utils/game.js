import { recurrent } from "brain.js";
import { handToStr, hands, nameToEmoji } from "./data"
import { rnd_range } from "./rndm-funcs";
import { init_2dscore } from "./other";
const net = new recurrent.LSTMTimeStep();

export const ab_res=(a,b)=>{
    if(hands.has(a)!==true||hands.has(b)!==true) throw "invalid hand";

    const N=handToStr.length;
    const aWin=a===(b+1)%N?1:0;
    const bWin=b===(a+1)%N?1:0;
    if(aWin===1) return 1;
    if(bWin===1) return -1;
    return 0;
}
export const opp_hand=(hand)=>{
    return (hand+1)%handToStr.length;
}
export const round_verdict=(name,res)=>{
    if(res===null) return '?';
    if(res===1) return name+' wins!';
    else if(res===-1) return name+' loses!';
    return 'Draw';
}
export const game_verdict=(score)=>{
    for(let i=0;i<score.length;i++)score[i]=Number(score[i] );
    console.log(score);
    const offeset=1;
    if(score[0+offeset]>score[1+offeset] )return nameToEmoji.get('player')+' Wins';
    else if(score[0+offeset]<score[1+offeset] )return nameToEmoji.get('player')+' Loses';
    return 'Draw';
}
export const get_models_hand=(playerHands,playerHandsLen,curPlayerHand,models)=>{
    const modelsHand=Array(models.length);
    for(let i=0;i<models.length;i++) modelsHand[i]=models[i].getHand(playerHands,playerHandsLen,curPlayerHand);
    return modelsHand;
}
export const get_new_score=(score,curPlayerHand,modelsHand)=>{
    const newScore=init_2dscore();
    for(let i=1;i<score.length;i++) for(let j=1;j<score[0].length;j++)newScore[i][j]=score[i][j];
    for(let i=1;i<score.length;i++){
      let res=ab_res(curPlayerHand,modelsHand[i-1] );
      if(res===1) newScore[i][1]=String((Number(score[i][1])+1) );
      else if(res===-1) newScore[i][2]=String((Number(score[i][2])+1) );
      else newScore[i][3]=String((Number(score[i][3])+1) );
    }
    return newScore;
}