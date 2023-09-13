import { handToStr } from "../my-utils/data";
import { rnd_range } from "../my-utils/rndm-funcs";

export class M0{
    constructor() {
    }
    static getHand(playerHands,n,curPlayerHand){
        return rnd_range(0,handToStr.length-1);
    }
    getHand(playerHands,n,curPlayerHand){
        return rnd_range(0,handToStr.length-1);
    }
    learn(playerHands,n,curPlayerHand){
        
    }
    reset(){
        return;
    }
};