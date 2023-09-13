import React from 'react';
import PlayerBox from './PlayerBox';
const RightSide = ({playerHand,modelsHand}) => {
  const reduced=true;
  return (
    <div className='flex-1-1-auto flex justify-content-space-around flex-direction-column'>
      {modelsHand.map((eachHand,i)=>{
        return <PlayerBox key={'m'+i.toString()} name={'m'+i.toString()} playerHand={playerHand} modelHand={eachHand} showStatus={true}/>;
      })}
    </div>
  );
};

export default RightSide;