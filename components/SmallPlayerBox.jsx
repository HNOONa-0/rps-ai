import React from 'react';
import { ab_res, round_verdict } from '../my-utils/game';
import { handToEmoji, handToStr, hands, nameToEmoji, verdictColor } from '../my-utils/data';
const SmallPlayerBox = ({name,handleClick,playerHand,modelHand,isPlayer}) => {
  const res=hands.has(playerHand)&&hands.has(modelHand)?ab_res(playerHand,modelHand):null;
  return (
    <div className='flex flex-direction-column justify-content-center sm-player-box-sz black-background align-self-center border-radius-4px'>
        <div className='flex justify-content-center gap-12px fz-26px'>
          {
            isPlayer?
            <div>&nbsp;{nameToEmoji.get(name)}&nbsp;</div>:
            <div>{nameToEmoji.get(name)}</div>
          }
          {handToStr.map((eachHand,i)=>{
            return <button key={eachHand} onClick={()=>handleClick(i) } disabled={!isPlayer} 
            style={{backgroundColor:!isPlayer&&i===modelHand&&verdictColor.get(res),color:'white'} } className='fz-26px'>{handToEmoji.get(i) }</button>;
          })}
        </div>
    </div>
  );
};

export default SmallPlayerBox;