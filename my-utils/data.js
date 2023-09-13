import { M0 } from "../models/M0";
import { M1 } from "../models/M1";
import { M2 } from "../models/M2";
import { M3 } from "../models/M3";

// 3 human gen patterns in a single array
export const orgPattern=[0,1,0,0,2,2,1,2,2,1,0,2,0,2,1,1,0,2,1,2,1,0,0,2,1,0,1,2,2,1,1,2,1,0,1,0,2,1,1,1,2,1,0,2,1,2,1,1,0,0,2,1,1,1,2,0,0,2,0,1,0,0,2,1,2,1,2,0,1,2,1,0,1,0,2,2,2,1,0,2,1,1,2,1,0,0,1,2,1,2,2,0,1,0,2,1,0,1,2,1];
// rock=0,paper=1,scissors=2
export const handToStr=['rock','paper','scissors']
// reverse the above
export const strToHand=new Map();
strToHand.set('rock',0);
strToHand.set('paper',1);
strToHand.set('scissors',2);
// make sure the hand is valid
export const hands=new Set()
hands.add(0);
hands.add(1);
hands.add(2);
// length of m1 window
export const K1=3;
// iterations of m3
export const NOITR=100;
// length of m3 window
export const K2=20;
// number of models
export const MODSZ=4;
// accuracy for m1
export const ACC=0.6;
// max round no
export const MXRNDS=10;
// name to emoji
export const nameToEmoji=new Map();
nameToEmoji.set('player','🧍');
nameToEmoji.set('m0','🔧');
nameToEmoji.set('m1','💻');
nameToEmoji.set('m2','🦾');
nameToEmoji.set('m3','🤖');
// verdict color
export const verdictColor=new Map();
verdictColor.set(1,'green');
verdictColor.set(0,'yellow');
verdictColor.set(-1,'red');
export const handToEmoji=new Map();
handToEmoji.set(0,'👊');
handToEmoji.set(1,'✋');
handToEmoji.set(2,'✌️');
// init score
export const initScore=['','win','loss','draw','m0','0','0','0','m1','0','0','0','m2','0','0','0','m3','0','0','0']
// score dimensions
export const SCRN=5;
export const SCRM=4;
// minimum width, height of screen
export const MINW=700;
export const MINH=700;