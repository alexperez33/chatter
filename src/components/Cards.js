import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Today's Top Chatters</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/A_Perez.jpg'
              text='How I Almost Died in Outer Space...'
              user='alex.s.perez'
              audio=<audio src={'audio/AlexSpace.m4a'} controls="controls" />
            />
            <CardItem
              src='images/img-2.jpg'
              text='Running 10k a Day is Good for the Soul, Here is Why.'
              user='charles.rich'
              audio=<audio src={'audio/CharlieAudio.mp3'} controls="controls" />
            />
            <CardItem
              src='images/img-1.jpg'
              text='My Journey as the CEO of WOW Promoter'
              user='tim.richardson'
              audio=<audio src={'audio/AlexSpace.m4a'} controls="controls" />
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='My Must Hear Speech (LIFE CHANGING)'
              user='cole_420'
              audio=<audio src={'audio/ColeAudio.m4a'} controls="controls" />
            />
            <CardItem
              src='images/img-4.jpg'
              text='Work Every Waking Hour'
              user='elonmusk'
              audio=<audio src={'audio/ElonMusk.m4a'} controls="controls" />
            />
            <CardItem
              src='images/img-8.jpg'
              text='My Path to Enlightenment'
              user='justin.bieber'
              audio=<audio src={'audio/ColeAudio.m4a'} controls="controls" />
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
