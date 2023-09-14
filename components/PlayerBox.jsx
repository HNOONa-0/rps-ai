import React from 'react';
import { nameToEmoji } from '../my-utils/data';
import HandsBox from './HandsBox';
const PlayerBox = ({name,playerHand,modelHand,handleClick,isPlayer,isSmall} ) => {
  return (
    <div className='flex flex-direction-column justify-content-space-around player-box-sz black-background border-radius-16px shaded '>
      <div className='player-header align-self-center'>
        {nameToEmoji.get(name)} {name}
      </div>
      <HandsBox playerHand={playerHand} modelHand={modelHand} handleClick={handleClick} isPlayer={isPlayer} isSmall={isSmall}/>
    </div>
  );
};

export default PlayerBox;