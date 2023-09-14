import React from 'react';
import PlayerBox from './PlayerBox';
import { handToEmoji, handToStr, nameToEmoji } from '../my-utils/data';
import { captalize_string } from '../my-utils/other';
import HandsBox from './HandsBox';
const LeftSide = ({playerHand,handleClick}) => {
  return (
    <div className='flex-1-1-auto flex justify-content-space-around flex-direction-column'>
      <div className='flex flex-direction-column justify-content-center align-self-end'>
        <PlayerBox name={'player'} playerHand={playerHand} modelHand={null} handleClick={handleClick} isPlayer={true} />
      </div>
    </div>
  );
};
export default LeftSide;
