import { handToStr } from "../my-utils/data";
import { opp_hand } from "../my-utils/game";
import { init_2darr } from "../my-utils/other";
import { rnd_range } from "../my-utils/rndm-funcs";
import { M0 } from "./M0";
export class M2{
    constructor() {
        this.frequencyMatrix=init_2darr(handToStr.length,handToStr.length);
    }
    getHand(playerHands,n,curPlayerHand){
        if (n<1) return M0.getHand(playerHands,n,curPlayerHand);

        let lastPlayerHand=playerHands[n-1];
        const arr=this.frequencyMatrix[lastPlayerHand];
        const maxOcc=Math.max(...arr);
        let res=[];

        for(let i=0;i<arr.length;i++) if(arr[i]==maxOcc) res.push(i);
        this.learn(playerHands,n,curPlayerHand);
        
        return opp_hand(res[rnd_range(0,res.length-1) ] );
    }
    learn(playerHands,n,curPlayerHand){
        if (n<1) return;
        let lastPlayerHand=playerHands[n-1];
        this.frequencyMatrix[lastPlayerHand][curPlayerHand]+=1;
    }
    reset(){
        const v2d=this.frequencyMatrix;
        for(let i=0;i<v2d.length;i++){
            for(let j=0;j<v2d[0].length;j++) this.frequencyMatrix[i][j]=0;
        }
    }
};