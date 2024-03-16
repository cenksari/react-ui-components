import Row from '../components/Containers/Row';
import Tab from '../components/Elements/Tab';
import Tabs from '../components/Elements/Tabs';

const Tabbars = () => (
  <>
    <Row className='margin-bottom'>
      <Tabs className='gray'>
        <Tab text='Gray tab 1' active />
        <Tab text='Gray tab 2' />
        <Tab text='Gray tab 3' />
      </Tabs>
    </Row>
    <Row className='margin-bottom'>
      <Tabs className='yellow'>
        <Tab text='Yellow tab 1' active />
        <Tab text='Yellow tab 2' />
        <Tab text='Yellow tab 3' />
      </Tabs>
    </Row>
    <Row className='margin-bottom'>
      <Tabs className='purple'>
        <Tab text='Purple tab 1' active />
        <Tab text='Purple tab 2' />
        <Tab text='Purple tab 3' />
      </Tabs>
    </Row>
    <Row className='margin-bottom'>
      <Tabs className='red'>
        <Tab text='Red tab 1' active />
        <Tab text='Red tab 2' />
        <Tab text='Red tab 3' />
      </Tabs>
    </Row>
    <Row className='margin-bottom'>
      <Tabs className='orange'>
        <Tab text='Orange tab 1' active />
        <Tab text='Orange tab 2' />
        <Tab text='Orange tab 3' />
      </Tabs>
    </Row>
    <Row className='margin-bottom'>
      <Tabs className='green'>
        <Tab text='Green tab 1' active />
        <Tab text='Green tab 2' />
        <Tab text='Green tab 3' />
      </Tabs>
    </Row>
    <Row className='margin-bottom'>
      <Tabs className='blue'>
        <Tab text='Blue tab 1' active />
        <Tab text='Blue tab 2' />
        <Tab text='Blue tab 3' />
      </Tabs>
    </Row>
    <Row className='margin-bottom'>
      <code>
        &lt;Tabs className=&quot;gray&quot;&gt;
        <br />
        &lt;Tab text=&quot;Gray tab 1&quot; active /&gt;
        <br />
        &lt;Tab text=&quot;Gray tab 2&quot; /&gt;
        <br />
        &lt;Tab text=&quot;Gray tab 3&quot; /&gt;
        <br />
        &lt;/Tabs&gt;
      </code>
    </Row>
  </>
);

export default Tabbars;
