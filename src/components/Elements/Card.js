import { memo } from 'react';

import PropTypes from 'prop-types';

import Button from '../Buttons/Button';

const Card = memo(({ size, className, title, content, image, button1Text, button2Text }) => (
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
        {button1Text && (
          <Button type='button' className={`${className}-filled`} text={button1Text} />
        )}
        {button2Text && (
          <Button type='button' className={`${className}-overlay`} text={button2Text} />
        )}
      </div>
    )}
  </div>
));

Card.defaultProps = {
  button1Text: null,
  button2Text: null,
};

Card.propTypes = {
  size: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  button1Text: PropTypes.string,
  button2Text: PropTypes.string,
};

export default Card;
