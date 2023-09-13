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

export default PlayerBox;