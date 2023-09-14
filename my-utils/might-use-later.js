import { useEffect, useState } from "react";

const handleReset=()=>{
    // for(let i=0;i<models.length;i++)models[i].reset();
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
import React from 'react';
import PlayerBox from './PlayerBox';
import { handToEmoji, handToStr, nameToEmoji } from '../my-utils/data';
import { captalize_string } from '../my-utils/other';
import HandsBox from './HandsBox';
const LeftSide = ({playerHand,handleClick}) => {
  return (
    <div className='flex-1-1-auto flex justify-content-space-around flex-direction-column'>
      <div className='flex flex-direction-column justify-content-center align-self-end'>
        <PlayerBox name={'player'} playerHand={playerHand} modelHand={0} showStatus={false}/> 
        <div className='flex flex-direction-column justify-content-center player-box-sz black-background'>
          <div className='flex justify-content-center gap-12px'>
            {handToStr.map((eachHand,i)=>{
              return <button key={eachHand} className='rps-button' onClick={()=>handleClick(i) }>{captalize_string(eachHand) }</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ab_res, round_verdict } from '../my-utils/game';
import { handToEmoji, handToStr, hands, nameToEmoji, verdictColor } from '../my-utils/data';
import { captalize_string } from '../my-utils/other';
const PlayerBox = ({name,playerHand,modelHand,showStatus}) => {
  const upName=captalize_string(name);
  const res=hands.has(playerHand)&&hands.has(modelHand)?ab_res(playerHand,modelHand):null;
  return (
    <div className='flex justify-content-center flex-direction-column player-box-sz black-background'>
      <div className='player-header align-self-center'>
        {nameToEmoji.get(name)+' '+upName }
      </div>
      <div className='align-self-center'>
        {upName} hand: {res===null?'?':captalize_string(showStatus?handToStr[modelHand]:handToStr[playerHand] ) }
        {/* {!showStatus&&handToEmoji.get(playerHand)!==undefined&&handToEmoji.get(playerHand)}  
        {showStatus&&handToEmoji.get(modelHand)!==undefined&&handToEmoji.get(modelHand) } */}
      </div>
      {showStatus?
        <div className='align-self-center' style={{color:verdictColor.get(res) }}>
          {round_verdict('Player',res) }
        </div>
      :null}
    </div>
  );
};