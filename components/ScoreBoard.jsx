import React from 'react';
import { captalize_string } from '../my-utils/other';
const ScoreBoard = ({score}) => {
  if(!score) return null;
  return (
    <div className='flex justify-content-center'>
      <div className='score-board-dim black-background'>
        <div className='flex justify-content-center bt-border'>
          <h2 className='score-board-header'>
            {captalize_string('score') }
          </h2>
        </div>
        <div className='white-background score-board-grid'>
          {score.flat().map((eachText,i)=>{
            return <div className='flex justify-content-center' key={i}><p>{captalize_string(eachText) }</p></div>
          })}
        </div>
        <div className='bt-border'></div>
      </div>
    </div>
  );
};

export default ScoreBoard;