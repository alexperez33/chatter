import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Audio from './Audio';

function CardItem(props) {
  const [comment, setComment] = useState(false);
  const handleClick = () => setComment(!comment);
  
  return (
    <>
      <li className='cards__item'>
        <figure className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.user}>
            <img
              className='cards__item__img'
              alt='username'
              src={props.src}
            />
          </figure>
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
                <figure> {props.audio}</figure>
                <Link className="comment" onClick={handleClick}>
                    <p1>Comment <i class="fas fa-microphone-alt"></i> </p1> <br></br>
                </Link>

                <div className='comment'>
                    {comment ?
                    <header className="comment-display">
                        <br></br>
                        <Audio/>
                    </header>: ''}
                </div>

                <Link>
                    <p1>Share <i class="fas fa-share"></i> </p1>
                </Link>
              </div>
          </figure>
      </li>
    </>
  );
}

export default CardItem;
