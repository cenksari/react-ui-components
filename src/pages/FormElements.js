import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';
import Input from '../components/Forms/Input';
import Radio from '../components/Forms/Radio';
import Switch from '../components/Forms/Switch';
import TextArea from '../components/Forms/TextArea';

const FormElements = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='input' id='input' href='#input' />
      <Heading type={2} className='gray' text='Input' />
      <Input name='inp' type='text' className='input-text' placeholder='input placeholder' />
      <code>
        &lt;Input name=&quot;inp&quot; type=&quot;text&quot; className=&quot;input-text&quot;
        placeholder=&quot;Input placeholder&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='textarea' id='textarea' href='#textarea' />
      <Heading type={2} className='gray' text='Textarea' />
      <TextArea name='txt' rows={3} className='input-text' placeholder='Textarea placeholder' />
      <code>
        &lt;TextArea name=&quot;txt&quot; rows={3} className=&quot;input-text&quot;
        placeholder=&quot;Textarea placeholder&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='select' id='select' href='#select' />
      <Heading type={2} className='gray' text='Select' />
      <select name='sel' className='select'>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
        <option value='4'>Option 4</option>
        <option value='5'>Option 5</option>
      </select>
      <code>
        &lt;select name=&quot;sel&quot; className=&quot;select&quot;&gt;
        <br />
        &lt;option value=&quot;1&quot;&gt;Option 1&lt;/option&gt;
        <br />
        &lt;option value=&quot;2&quot;&gt;Option 2&lt;/option&gt;
        <br />
        &lt;option value=&quot;3&quot;&gt;Option 3&lt;/option&gt;
        <br />
        &lt;option value=&quot;4&quot;&gt;Option 4&lt;/option&gt;
        <br />
        &lt;option value=&quot;5&quot;&gt;Option 5&lt;/option&gt;
        <br />
        &lt;/select&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='switch' id='switch' href='#switch' />
      <Heading type={2} className='gray' text='Switch' />
      <Row className='margin-bottom'>
        <Switch name='col' checked description='Gray switch' className='gray' />
      </Row>
      <Row className='margin-bottom'>
        <Switch name='col' checked description='Yellow switch' className='yellow' />
      </Row>
      <Row className='margin-bottom'>
        <Switch name='col' checked description='Purple switch' className='purple' />
      </Row>
      <Row className='margin-bottom'>
        <Switch name='col' checked description='Red switch' className='red' />
      </Row>
      <Row className='margin-bottom'>
        <Switch name='col' checked description='Orange switch' className='orange' />
      </Row>
      <Row className='margin-bottom'>
        <Switch name='col' checked description='Green switch' className='green' />
      </Row>
      <Row className='margin-bottom'>
        <Switch name='col' checked description='Blue switch' className='blue' />
      </Row>
      <Row className='margin-bottom'>
        <code>
          &lt;Switch name=&quot;col&quot; checked description=&quot;Gray switch&quot;
          className=&quot;gray&quot; /&gt;
          <br />
          &lt;Switch name=&quot;col&quot; description=&quot;Yellow switch&quot;
          className=&quot;yellow&quot; /&gt;
          <br />
          &lt;Switch name=&quot;col&quot; description=&quot;Purple switch&quot;
          className=&quot;purple&quot; /&gt;
          <br />
          &lt;Switch name=&quot;col&quot; description=&quot;Red switch&quot;
          className=&quot;red&quot; /&gt;
          <br />
          &lt;Switch name=&quot;col&quot; description=&quot;Orange switch&quot;
          className=&quot;orange&quot; /&gt;
          <br />
          &lt;Switch name=&quot;col&quot; description=&quot;Green switch&quot;
          className=&quot;green&quot; /&gt;
          <br />
          &lt;Switch name=&quot;col&quot; description=&quot;Blue switch&quot;
          className=&quot;blue&quot; /&gt;
        </code>
      </Row>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='radio' id='radio' href='#radio' />
      <Heading type={2} className='gray' text='Radio button' />
      <Row className='margin-bottom'>
        <Radio checked name='fav' description='Gray radio button' className='gray' value='1' />
      </Row>
      <Row className='margin-bottom'>
        <Radio name='fav' description='Yellow radio button' className='yellow' value='2' />
      </Row>
      <Row className='margin-bottom'>
        <Radio name='fav' description='Purple radio button' className='purple' value='3' />
      </Row>
      <Row className='margin-bottom'>
        <Radio name='fav' description='Red radio button' className='red' value='4' />
      </Row>
      <Row className='margin-bottom'>
        <Radio name='fav' description='Orange radio button' className='orange' value='5' />
      </Row>
      <Row className='margin-bottom'>
        <Radio name='fav' description='Green radio button' className='green' value='6' />
      </Row>
      <Row className='margin-bottom'>
        <Radio name='fav' description='Blue radio button' className='blue' value='7' />
      </Row>
      <code>
        &lt;Radio checked name=&quot;fav&quot; description=&quot;Gray radio button&quot;
        className=&quot;gray&quot; value=&quot;1&quot; /&gt;
        <br />
        &lt;Radio name=&quot;fav&quot; description=&quot;Yellow radio button&quot;
        className=&quot;yellow&quot; value=&quot;2&quot; /&gt;
        <br />
        &lt;Radio name=&quot;fav&quot; description=&quot;Purple radio button&quot;
        className=&quot;purple&quot; value=&quot;3&quot; /&gt;
        <br />
        &lt;Radio name=&quot;fav&quot; description=&quot;Red radio button&quot;
        className=&quot;red&quot; value=&quot;4&quot; /&gt;
        <br />
        &lt;Radio name=&quot;fav&quot; description=&quot;Orange radio button&quot;
        className=&quot;orange&quot; value=&quot;5&quot; /&gt;
        <br />
        &lt;Radio name=&quot;fav&quot; description=&quot;Green radio button&quot;
        className=&quot;green&quot; value=&quot;6&quot; /&gt;
        <br />
        &lt;Radio name=&quot;fav&quot; description=&quot;Blue radio button&quot;
        className=&quot;blue&quot; value=&quot;7&quot; /&gt;
      </code>
    </Row>
  </>
);

export default FormElements;
