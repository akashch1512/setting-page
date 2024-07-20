import React from 'react';
import './App.css';

import { binanceLogo } from './images';

import Mine from './icons/Mine';
import Friends from './icons/Friends';
import Coins from './icons/Coins';
import Airdrop from './icons/Airdrop';

const App: React.FC = () => {
  
  const handleMineIconClick = () => {
    window.location.href = "https://page2game.netlify.app/"; // 
  };

  const handleExchangeIconClick = () => {
     window.location.href = "https://falconhamster.netlify.app/"; // 
  };

  const handleFriendsIconClick = () => {
    window.location.href = "https://page3game.netlify.app/"; //
  };

  const handleEarnIconClick = () => {
    window.location.href = "https://exchnagepageakash.netlify.app/"; // 
  };

  const handlehamsterCoinIconClick = () => {
    window.location.href = "https://page1game.netlify.app/"; //  airdrop
  };
  
  return (
    <div onClick={handleExchangeIconClick} className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
        <div className="text-center text-[#85827d] w-1/5 m-1 p-2 rounded-2xl">
          <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Exchange</p>
        </div>

        <div onClick={handleMineIconClick} className="text-center text-[#85827d] w-1/5">
        <Mine className="w-8 h-8 mx-auto" />
        <p className="mt-1">Mine</p>
          </div>

        <div onClick={handleFriendsIconClick} className="text-center text-[#85827d] w-1/5">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div onClick={handleEarnIconClick} className="text-center text-[#85827d] w-1/5">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
        <div onClick={handlehamsterCoinIconClick} className="text-center text-[#85827d] w-1/5">
        <Airdrop className='w-10 h-10 mx-auto' />
          <p className="mt-1">Airdrop</p>
          </div>
        </div>
  )
};
export default App;
