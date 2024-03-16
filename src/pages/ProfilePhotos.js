import Row from '../components/Containers/Row';
import ProfilePhoto from '../components/Elements/ProfilePhoto';

const ProfilePhotos = () => (
  <Row className='margin-bottom'>
    <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='big' />
    <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='large' />
    <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='medium' />
    <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='small' />
    <ProfilePhoto
      image='https://www.cenksari.com/content/profile.jpg'
      text='Cenk SARI'
      size='small'
    />
    <code>
      &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
      size=&quot;big&quot; /&gt;
      <br />
      &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
      size=&quot;large&quot; /&gt;
      <br />
      &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
      size=&quot;medium&quot; /&gt;
      <br />
      &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
      size=&quot;small&quot; /&gt;
      <br />
      &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
      text=&quot;Cenk SARI&quot; size=&quot;small&quot; /&gt;
    </code>
  </Row>
);

export default ProfilePhotos;
