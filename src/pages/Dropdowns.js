import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';
import Dropdown from '../components/Elements/Dropdown';
import DropdownItem from '../components/Elements/DropdownItem';

const Dropdowns = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='dropdown' id='dropdown' href='#dropdown' />
      <Heading type={2} color='gray' text='Gray' />
      <Dropdown color='gray'>
        <DropdownItem text='First item' />
        <DropdownItem text='Second item' />
        <hr />
        <DropdownItem text='Third item' active />
        <hr />
        <DropdownItem text='Fourth item' />
      </Dropdown>
      <code>
        &lt;Dropdown color=&apos;gray&apos;&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;First item&apos; /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Second item&apos; /&gt;
        <br />
        <span className='tab' />
        &lt;hr /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Third item&apos; active /&gt;
        <br />
        <span className='tab' />
        &lt;hr /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Fourth item&apos; /&gt;
        <br />
        &lt;/Dropdown&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} color='gray' text='Red' />
      <Dropdown color='red'>
        <DropdownItem text='First item' />
        <DropdownItem text='Second item' />
        <hr />
        <DropdownItem text='Third item' active />
        <hr />
        <DropdownItem text='Fourth item' />
      </Dropdown>
      <code>
        &lt;Dropdown color=&apos;red&apos;&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;First item&apos; /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Second item&apos; /&gt;
        <br />
        <span className='tab' />
        &lt;hr /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Third item&apos; active /&gt;
        <br />
        <span className='tab' />
        &lt;hr /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Fourth item&apos; /&gt;
        <br />
        &lt;/Dropdown&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} color='gray' text='Blue' />
      <Dropdown color='blue'>
        <DropdownItem text='First item' />
        <DropdownItem text='Second item' />
        <hr />
        <DropdownItem text='Third item' active />
        <hr />
        <DropdownItem text='Fourth item' />
      </Dropdown>
      <code>
        &lt;Dropdown color=&apos;blue&apos;&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;First item&apos; /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Second item&apos; /&gt;
        <br />
        <span className='tab' />
        &lt;hr /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Third item&apos; active /&gt;
        <br />
        <span className='tab' />
        &lt;hr /&gt;
        <br />
        <span className='tab' />
        &lt;DropdownItem text=&apos;Fourth item&apos; /&gt;
        <br />
        &lt;/Dropdown&gt;
      </code>
    </Row>
  </>
);

export default Dropdowns;
