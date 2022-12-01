import React from 'react';
import Search from '../Search/Search';
import './Hero.scss';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <h1>find your movie</h1>
        <Search />
      </div>
    </div>
  );
}
