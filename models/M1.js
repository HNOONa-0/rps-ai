import { ACC, K1 } from "../my-utils/data";
import { opp_hand } from "../my-utils/game";
import { is_match } from "../my-utils/other";
import { rnd_range } from "../my-utils/rndm-funcs";
import { M0 } from "./M0";

export class M1{
    constructor() {
    }
    getHand(playerHands,n,curPlayerHand){
        const K=K1;
        if (n<K) return M0.getHand(playerHands,n,curPlayerHand);

        const occ=new Map();
        for(let i=0;i<n-K;i++){
            const curAcc=is_match(playerHands,i,n-K,K);
            // console.log(curAcc);
            if(curAcc>=ACC){
                if(occ.get(playerHands[i+K] )===undefined)occ.set(playerHands[i+K],1);
                else occ.set(playerHands[i+K],occ.get(playerHands[i+K] )+1);
            }
        }
        // console.log(occ);
        if (occ.size===0) return M0.getHand(playerHands,n,curPlayerHand);

        const maxOcc=Math.max(...occ.values() );
        let res=[];
        occ.forEach((value,key)=>{
            if(value===maxOcc) res.push(key);
        });
        return opp_hand(res[rnd_range(0,res.length-1) ] );
    }
    learn(playerHands,n,curPlayerHand){
        
    }
    reset(){
        return;
    }

};