import React from 'react';

import Button from '../Buttons/Button';

interface IProps {
  size: string;
  color: string;
  title: string;
  content: string;
  image: string;
  button1Text?: string;
  button2Text?: string;
}

const Card = ({
  size,
  color,
  title,
  content,
  image,
  button1Text,
  button2Text,
}: IProps): React.JSX.Element => (
  <div className={`card ${size}-card`}>
    <div className='card-title flex flex-v-center flex-space-between'>
      <h6>{title}</h6>
      <button type='button'>
        <i className='material-icons'>more_vert</i>
      </button>
    </div>
    <div className='card-image' style={{ backgroundImage: `url("${image}")` }} />
    <div className='card-content'>
      <p>{content}</p>
    </div>
    {(button1Text || button2Text) && (
      <div className='card-buttons flex flex-v-center flex-space-around'>
        {button1Text && <Button type='button' color={`${color}-filled`} text={button1Text} />}
        {button2Text && <Button type='button' color={`${color}-overlay`} text={button2Text} />}
      </div>
    )}
  </div>
);

export default Card;
