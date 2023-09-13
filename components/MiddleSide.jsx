import React from 'react';
import SmallPlayerBox from './SmallPlayerBox';
const UpSide = ({models,handleClick,playerHand,modelsHand} ) => {
  // console.log(models);
  return (
    <div className='flex flex-direction-column justify-content-space-around fill-rest'>
      <SmallPlayerBox name='player' handleClick={handleClick} playerHand={0} modelHand={0} isPlayer={true}  />
      {models.map((eachMode,i)=>{
        return <SmallPlayerBox key={'m'+i.toString()} name={'m'+i.toString()} handleClick={null} playerHand={playerHand} modelHand={modelsHand[i]} isPlayer={false}  />;
      })}
    </div>
  );
};

export default UpSide;