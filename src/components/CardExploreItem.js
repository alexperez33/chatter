import React from 'react';

function CardExploreItem(props) {
  return (
    <>
      <li className='cards__item'>
        <figure className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='This is a pic'
              src={props.src}
            />
          </figure>
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>
          </figure>
      </li>
    </>
  );
}

export default CardExploreItem;
