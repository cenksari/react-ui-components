import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';
import ProfilePhoto from '../components/Elements/ProfilePhoto';

const ProfilePhotos = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='pp-big' id='pp-big' href='#pp-big' />
      <Heading type={2} color='gray' text='Big' />
      <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='big' />
      <code>
        &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
        size=&quot;big&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='pp-large' id='pp-large' href='#pp-large' />
      <Heading type={2} color='gray' text='Large' />
      <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='large' />
      <code>
        &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
        size=&quot;large&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='pp-medium' id='pp-medium' href='#pp-medium' />
      <Heading type={2} color='gray' text='Medium' />
      <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='medium' />
      <code>
        &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
        size=&quot;medium&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='pp-small' id='pp-small' href='#pp-small' />
      <Heading type={2} color='gray' text='Small' />
      <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='small' />
      <code>
        &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
        size=&quot;small&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='pp-text' id='pp-text' href='#pp-text' />
      <Heading type={2} color='gray' text='with text' />
      <ProfilePhoto
        image='https://www.cenksari.com/content/profile.jpg'
        text='Cenk SARI'
        size='small'
      />
      <code>
        &lt;ProfilePhoto image=&quot;https://www.cenksari.com/content/profile.jpg&quot;
        text=&quot;Cenk SARI&quot; size=&quot;small&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='pp-avatar' id='pp-avatar' href='#pp-avatar' />
      <Heading type={2} color='gray' text='Text avatar' />
      <ProfilePhoto text='CS' size='small' color='gray' />
      <ProfilePhoto text='CS' size='small' color='yellow' />
      <ProfilePhoto text='CS' size='small' color='purple' />
      <ProfilePhoto text='CS' size='small' color='red' />
      <ProfilePhoto text='CS' size='small' color='orange' />
      <ProfilePhoto text='CS' size='small' color='green' />
      <ProfilePhoto text='CS' size='small' color='blue' />
      <code>
        &lt;ProfilePhoto text=&quot;CS&quot; size=&quot;small&quot; color=&quot;gray&quot; /&gt;
        <br />
        &lt;ProfilePhoto text=&quot;CS&quot; size=&quot;small&quot; color=&quot;yellow&quot; /&gt;
        <br />
        &lt;ProfilePhoto text=&quot;CS&quot; size=&quot;small&quot; color=&quot;purple&quot; /&gt;
        <br />
        &lt;ProfilePhoto text=&quot;CS&quot; size=&quot;small&quot; color=&quot;red&quot; /&gt;
        <br />
        &lt;ProfilePhoto text=&quot;CS&quot; size=&quot;small&quot; color=&quot;orange&quot; /&gt;
        <br />
        &lt;ProfilePhoto text=&quot;CS&quot; size=&quot;small&quot; color=&quot;green&quot; /&gt;
        <br />
        &lt;ProfilePhoto text=&quot;CS&quot; size=&quot;small&quot; color=&quot;blue&quot; /&gt;
      </code>
    </Row>
  </>
);

export default ProfilePhotos;
