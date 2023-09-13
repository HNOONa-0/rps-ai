import { SCRM, SCRN, initScore } from "./data";

export const is_match=(playerHands,q,r,K)=>{
    let c=0;
    for(let i=0;i<K;i++) if(playerHands[q+i]===playerHands[r+i] )c++;
    return c/K;
}
export const init_2darr=(n,m,val=0)=>{
    let v2d=new Array(n);
    for(let i=0;i<n;i++){
        v2d[i]=new Array(m);
        for(let j=0;j<m;j++) v2d[i][j]=val;
    }
    return v2d;
}
export const init_2dscore=()=>{
    const n=SCRN;
    const m=SCRM;
    const v2d=init_2darr(n,m,0);
    let w=0;
    for(let i=0;i<n;i++)for(let j=0;j<m;j++)v2d[i][j]=initScore[w++];
    return v2d;
}
export const captalize_string=(s)=>{
    const t=s.charAt(0).toUpperCase();
    const res=t+s.slice(1);
    // console.log(res);
    return res;
}