// random number between range
export const rnd_range=(min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export const rnd_subarr=(arr,sz)=>{
    const n=arr.length;
    const start=rnd_range(0,n-sz);
    return arr.slice(start,start+sz);
}
