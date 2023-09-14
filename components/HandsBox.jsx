import React from 'react';
import { handToEmoji, handToStr, hands, verdictColor } from '../my-utils/data';
import { ab_res } from '../my-utils/game';

const HandsBox = ({handleClick,isPlayer,isSmall,playerHand,modelHand}) => {
  const res=hands.has(playerHand)&&hands.has(modelHand)?ab_res(playerHand,modelHand):null;
  return (
    <div className='flex justify-content-center gap-12px'>
      {handToStr.map((eachHand,i)=>{
        return <button key={eachHand} disabled={!isPlayer} className={'fz-26px '+(isSmall?'':'rps-button') } 
        onClick={()=>handleClick(i) } style={{backgroundColor:!isPlayer&&i===modelHand&&verdictColor.get(res),color:'white'} } >{handToEmoji.get(i) }</button>;
      })}
    </div>
  );
};

export default HandsBox;