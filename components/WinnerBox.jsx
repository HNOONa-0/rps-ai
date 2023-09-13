import React from 'react';
import { ab_res, game_verdict, round_verdict } from '../my-utils/game';
import { SCRN, handToEmoji, handToStr, hands, nameToEmoji, verdictColor } from '../my-utils/data';
const WinnerBox = ({models,score,handleClick}) => {
  const result=[];
  for(let i=1;i<SCRN;i++){
    const s=nameToEmoji.get('player')+' vs '+nameToEmoji.get('m'+(i-1).toString() )+': '+game_verdict([...score[i] ] );
    result.push(
      <div key={i} className='flex flex-direction-column justify-content-center sm-player-box-sz black-background align-self-center' style={{marginTop:i===1?'8px':'0px'} }>
          <div className='flex justify-content-center'>
            {s}
          </div>
      </div>
    )
  }
  // console.log(result);
  return (
    <>
      {result}
      <div className='flex flex-direction-column justify-content-center sm-player-box-sz black-background align-self-center'>
        <button className='rps-button fz-26px' onClick={handleClick}>Reset</button>
      </div>
    </>
  );
};

export default WinnerBox;