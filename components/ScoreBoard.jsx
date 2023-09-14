import React from 'react';
import { captalize_string } from '../my-utils/other';
import refreshImg from '../src/assets/358-3582658_reload-icon-white-reload-white-icon-png.png'
const ScoreBoard = ({score,handleClick}) => {
  if(!score) return null;
  return (
    <div className='flex justify-content-center'>
      <div className='score-board-dim black-background border-radius-4px'>
        <div className='flex justify-content-center gap-16px bt-border-3px'>
          <h2 className='score-board-header'>
            {captalize_string('score') }
          </h2>
          <button className='align-self-center' onClick={handleClick}>
            <img src={refreshImg} className='refresh-sz'></img>
          </button>
        </div>
        <div className='white-background score-board-grid'>
          {score.flat().map((eachText,i)=>{
            return <div className='flex justify-content-center black-background' key={i}><p>{captalize_string(eachText) }</p></div>
          })}
          {/* import refreshImg from '../src/assets/icons8-refresh-50.png'
          {score.flat().map((eachText,i)=>{
            return <div className='flex justify-content-center' key={i}>
              {i===0?<img src={refreshImg} style={{width:'16px',height:'16px',alignSelf:'center'} }/>:<p>{captalize_string(eachText) }</p>
              }</div>
          })} */}
        </div>
        {/* <div className='bt-border border-radius-4px'></div> */}
      </div>
    </div>
  );
};

export default ScoreBoard;