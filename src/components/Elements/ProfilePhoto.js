import { memo } from 'react';

import PropTypes from 'prop-types';

const ProfilePhoto = memo(({ className, size, text, image }) => {
  if (!image) {
    return (
      <div className='profile-photo'>
        <div className={`avatar ${size} ${className}`}>{text}</div>
      </div>
    );
  }

  return (
    <div className='profile-photo'>
      <div className={`cover ${size}`} style={{ backgroundImage: `url("${image}")` }} />
      {text && <span>{text}</span>}
    </div>
  );
});

ProfilePhoto.defaultProps = {
  size: 'small',
  text: null,
  className: null,
  image: null,
};

ProfilePhoto.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
};

export default ProfilePhoto;
