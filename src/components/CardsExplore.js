import React from 'react';
import './Cards.css';
import CardExploreItem from './CardExploreItem';

function CardsExplore() {
  return (
    <div className='cards'>
      <h1>Popular Genres</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardExploreItem
              src='images/img-1.jpg'
              text='ADVENTURE'
            />
            <CardExploreItem
              src='images/img-2.jpg'
              text='VACATION STORIES'
              audio=<audio src={'audio/HowAreYou.m4a'} controls="controls" />
            />
            <CardExploreItem
              src='images/img-3.jpg'
              text='MOTIVATION'
              audio=<audio src={'audio/HowAreYou.m4a'} controls="controls" />
            />
          </ul>
          <ul className='cards__items'>
            <CardExploreItem
              src='images/img-4.jpg'
              text='INTERSTING FACTS'
              audio=<audio src={'audio/ColeAudio.m4a'} controls="controls" />
            />
            <CardExploreItem
              src='images/img-6.jpg'
              text='COMEDY'
              audio=<audio src={'audio/ElonMusk.m4a'} controls="controls" />
            />
            <CardExploreItem
              src='images/img-7.jpg'
              text='DISCIPLINE'
              audio=<audio src={'audio/HowAreYou.m4a'} controls="controls" />
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsExplore;
