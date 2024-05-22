import { memo } from 'react';

interface IProps {
  size: string;
  text?: string;
  color?: string;
  image?: string;
}

const ProfilePhoto = memo(({ color, size = 'small', text, image }: IProps): React.JSX.Element => {
  if (!image) {
    return (
      <div className='profile-photo'>
        <div className={`avatar ${size} ${color}`}>{text}</div>
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

export default ProfilePhoto;
