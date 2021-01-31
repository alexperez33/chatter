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
            />
            <CardExploreItem
              src='images/img-3.jpg'
              text='MOTIVATION'
            />
          </ul>
          <ul className='cards__items'>
            <CardExploreItem
              src='images/img-4.jpg'
              text='INTERSTING FACTS'
            />
            <CardExploreItem
              src='images/img-6.jpg'
              text='COMEDY'
            />
            <CardExploreItem
              src='images/img-7.jpg'
              text='DISCIPLINE'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsExplore;
