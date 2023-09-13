import { useEffect, useState } from "react";

const handleReset=()=>{
    for(let i=0;i<models.length;i++)models[i].reset();
    setRounds(0);
    setPlayerHand(null);
    setModelsHand([null,null,null,null] );
    setPlayerHands([] );
    setModels([new M0(), new M1(), new M2(), new M3() ] );
    setScore(init_2dscore() );
}
setTimeout(function() {
    setShowLoader(false);
    setPlayerHands([]);
    setScore(init_2dscore() );
    setModels([new M0(), new M1(), new M2(), new M3() ] );
}, 1000);
const hooks=()=>{
  // incase we need to store hands of all models
  const[modelsHands,setModelsHands]=useState([[],[],[],[] ] );
  // incase we need a loader
  const[isLoader,setIsLoader]=useState(false);
  if(isLoader) return <div className='loader' />;    
  useEffect(()=>{
    // init the resize observer
    setIsLoader(false)
  },[] );
}