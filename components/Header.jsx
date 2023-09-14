import React from 'react';
const Header = ({handleClick}) => {
  return (
    <div className='flex justify-content-center flex-grow-1 gap-16px'>
        <h1>Round {rounds+1}</h1>
        <button className='align-self-center' onClick={handleClick}>
          <img src={refreshImg} className='refresh-sz'></img>
        </button>
    </div>
  );
};
export default Header;
