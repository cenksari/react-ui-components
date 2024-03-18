import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';
import Card from '../components/Elements/Card';

const Cards = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='c-large' id='c-large' href='#c-large' />
      <Heading type={2} className='gray' text='Large card' />
      <Card
        size='large'
        className='blue'
        title='Card title goes here'
        image='https://www.cenksari.com/content/bg2.jpg'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        button1Text='First button'
        button2Text='Second button'
      />
      <code>
        &lt;Card
        <br />
        size=&apos;large&apos;
        <br />
        className=&apos;blue&apos;
        <br />
        title=&apos;Card title goes here&apos;
        <br />
        image=&apos;https://www.cenksari.com/content/bg2.jpg&apos;
        <br />
        content=&apos;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.&apos;
        <br />
        button1Text=&apos;First button&apos;
        <br />
        button2Text=&apos;Second button&apos;
        <br />
        /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='c-medium' id='c-medium' href='#c-medium' />
      <Heading type={2} className='gray' text='Medium card' />
      <Card
        size='medium'
        className='blue'
        title='Card title goes here'
        image='https://www.cenksari.com/content/bg2.jpg'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        button1Text='First button'
      />
      <code>
        &lt;Card
        <br />
        size=&apos;medium&apos;
        <br />
        className=&apos;blue&apos;
        <br />
        title=&apos;Card title goes here&apos;
        <br />
        image=&apos;https://www.cenksari.com/content/bg2.jpg&apos;
        <br />
        content=&apos;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.&apos;
        <br />
        button1Text=&apos;First button&apos;
        <br />
        /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='c-small' id='c-small' href='#c-small' />
      <Heading type={2} className='gray' text='Small card' />
      <Card
        size='small'
        className='blue'
        title='Card title goes here'
        image='https://www.cenksari.com/content/bg2.jpg'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        button1Text='First button'
      />
      <code>
        &lt;Card
        <br />
        size=&apos;small&apos;
        <br />
        className=&apos;blue&apos;
        <br />
        title=&apos;Card title goes here&apos;
        <br />
        image=&apos;https://www.cenksari.com/content/bg2.jpg&apos;
        <br />
        content=&apos;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.&apos;
        <br />
        button1Text=&apos;First button&apos;
        <br />
        /&gt;
      </code>
    </Row>
  </>
);

export default Cards;
