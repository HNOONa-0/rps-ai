import React from 'react';
import PlayerBox from './PlayerBox';
import { handToStr } from '../my-utils/data';
import { captalize_string } from '../my-utils/other';
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

export default LeftSide;