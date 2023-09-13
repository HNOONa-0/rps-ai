import { recurrent } from "brain.js";
import { rnd_subarr } from "../my-utils/rndm-funcs";
import { K2, NOITR, hands, orgPattern } from "../my-utils/data";
import { M0 } from "./M0";
import { opp_hand } from "../my-utils/game";
export class M3{
    constructor() {
        this.pattern=rnd_subarr(orgPattern,K2)
        this.net=new recurrent.LSTMTimeStep();
    }
    getHand(playerHands,n,curPlayerHand){
        // console.log(this.pattern);
        this.learn(playerHands,n,curPlayerHand);
        const res=Math.max(Math.round(this.net.run(this.pattern) ),0);
        // const res=Math.max(Math.round(this.net.forecast(this.pattern) ),0);
        this.updatePattern(playerHands,n,curPlayerHand);

        // console.log(res);
        if(hands.has(res)!==true) return M0.getHand(playerHands,n,curPlayerHand);

        return opp_hand(res);
    }
    learn(playerHands,n,curPlayerHand){
        this.net.train([this.pattern], { iterations: NOITR, log: false} );
    }
    updatePattern(playerHands,n,curPlayerHand){
        this.pattern.shift();
        this.pattern.push(curPlayerHand);
    }
    reset(){
        // reset network?
        return;
    }
};