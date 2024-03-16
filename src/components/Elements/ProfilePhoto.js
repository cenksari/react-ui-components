import { memo } from 'react';

import PropTypes from 'prop-types';

const ProfilePhoto = memo(({ size, text, image }) => (
  <div className='profile-photo'>
    <div className={`cover ${size}`} style={{ backgroundImage: `url("${image}")` }} />
    {text && <span>{text}</span>}
  </div>
));

ProfilePhoto.defaultProps = {
  size: 'small',
  text: null,
};

ProfilePhoto.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default ProfilePhoto;
