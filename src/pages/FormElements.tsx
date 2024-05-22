import { useState } from 'react';

import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';
import Input from '../components/Forms/Input';
import Radio from '../components/Forms/Radio';
import Switch from '../components/Forms/Switch';
import TextArea from '../components/Forms/TextArea';

const FormElements = (): React.JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <>
      <Row className='margin-bottom'>
        <a aria-label='input' id='input' href='#input' />
        <Heading type={2} color='gray' text='Input' />
        <Input
          name='inp'
          type='text'
          placeholder='input placeholder'
          value={inputValue}
          onChange={handleInputChange}
        />
        <code>
          &lt;Input name=&quot;inp&quot; type=&quot;text&quot; placeholder=&quot;Input
          placeholder&quot; value=&apos;&apos; onChange={'{() => {}}'} /&gt;
        </code>
      </Row>
      <Row className='margin-bottom'>
        <a aria-label='textarea' id='textarea' href='#textarea' />
        <Heading type={2} color='gray' text='Textarea' />
        <TextArea
          name='txt'
          rows={3}
          placeholder='Textarea placeholder'
          value={textAreaValue}
          onChange={handleTextAreaChange}
        />
        <code>
          &lt;TextArea name=&quot;txt&quot; rows={'{3}'} placeholder=&quot;Textarea
          placeholder&quot; value=&apos;&apos; onChange={'{() => {}}'} /&gt;
        </code>
      </Row>
      <Row className='margin-bottom'>
        <a aria-label='select' id='select' href='#select' />
        <Heading type={2} color='gray' text='Select' />
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
          <span className='tab' />
          &lt;option value=&quot;1&quot;&gt;Option 1&lt;/option&gt;
          <br />
          <span className='tab' />
          &lt;option value=&quot;2&quot;&gt;Option 2&lt;/option&gt;
          <br />
          <span className='tab' />
          &lt;option value=&quot;3&quot;&gt;Option 3&lt;/option&gt;
          <br />
          <span className='tab' />
          &lt;option value=&quot;4&quot;&gt;Option 4&lt;/option&gt;
          <br />
          <span className='tab' />
          &lt;option value=&quot;5&quot;&gt;Option 5&lt;/option&gt;
          <br />
          &lt;/select&gt;
        </code>
      </Row>
      <Row className='margin-bottom'>
        <a aria-label='switch' id='switch' href='#switch' />
        <Heading type={2} color='gray' text='Switch' />
        <p className='gray'>You can also use color tags.</p>
        <Row className='margin-bottom'>
          <Switch name='col' checked description='Gray switch' color='gray' />
        </Row>
        <Row className='margin-bottom'>
          <Switch name='col' checked description='Yellow switch' color='yellow' />
        </Row>
        <Row className='margin-bottom'>
          <Switch name='col' checked description='Purple switch' color='purple' />
        </Row>
        <Row className='margin-bottom'>
          <Switch name='col' checked description='Red switch' color='red' />
        </Row>
        <Row className='margin-bottom'>
          <Switch name='col' checked description='Orange switch' color='orange' />
        </Row>
        <Row className='margin-bottom'>
          <Switch name='col' checked description='Green switch' color='green' />
        </Row>
        <Row className='margin-bottom'>
          <Switch name='col' checked description='Blue switch' color='blue' />
        </Row>
        <Row className='margin-bottom'>
          <code>
            &lt;Switch name=&quot;col&quot; checked description=&quot;Gray switch&quot;
            color=&quot;gray&quot; /&gt;
            <br />
            &lt;Switch name=&quot;col&quot; checked description=&quot;Yellow switch&quot;
            color=&quot;yellow&quot; /&gt;
            <br />
            &lt;Switch name=&quot;col&quot; checked description=&quot;Purple switch&quot;
            color=&quot;purple&quot; /&gt;
            <br />
            &lt;Switch name=&quot;col&quot; checked description=&quot;Red switch&quot;
            color=&quot;red&quot; /&gt;
            <br />
            &lt;Switch name=&quot;col&quot; checked description=&quot;Orange switch&quot;
            color=&quot;orange&quot; /&gt;
            <br />
            &lt;Switch name=&quot;col&quot; checked description=&quot;Green switch&quot;
            color=&quot;green&quot; /&gt;
            <br />
            &lt;Switch name=&quot;col&quot; checked description=&quot;Blue switch&quot;
            color=&quot;blue&quot; /&gt;
          </code>
        </Row>
      </Row>
      <Row className='margin-bottom'>
        <a aria-label='radio' id='radio' href='#radio' />
        <Heading type={2} color='gray' text='Radio button' />
        <p className='gray'>You can also use color tags.</p>
        <Row className='margin-bottom'>
          <Radio checked name='fav' description='Gray radio button' color='gray' value='1' />
        </Row>
        <Row className='margin-bottom'>
          <Radio name='fav' description='Yellow radio button' color='yellow' value='2' />
        </Row>
        <Row className='margin-bottom'>
          <Radio name='fav' description='Purple radio button' color='purple' value='3' />
        </Row>
        <Row className='margin-bottom'>
          <Radio name='fav' description='Red radio button' color='red' value='4' />
        </Row>
        <Row className='margin-bottom'>
          <Radio name='fav' description='Orange radio button' color='orange' value='5' />
        </Row>
        <Row className='margin-bottom'>
          <Radio name='fav' description='Green radio button' color='green' value='6' />
        </Row>
        <Row className='margin-bottom'>
          <Radio name='fav' description='Blue radio button' color='blue' value='7' />
        </Row>
        <code>
          &lt;Radio checked name=&quot;fav&quot; description=&quot;Gray radio button&quot;
          color=&quot;gray&quot; value=&quot;1&quot; /&gt;
          <br />
          &lt;Radio name=&quot;fav&quot; description=&quot;Yellow radio button&quot;
          color=&quot;yellow&quot; value=&quot;2&quot; /&gt;
          <br />
          &lt;Radio name=&quot;fav&quot; description=&quot;Purple radio button&quot;
          color=&quot;purple&quot; value=&quot;3&quot; /&gt;
          <br />
          &lt;Radio name=&quot;fav&quot; description=&quot;Red radio button&quot;
          color=&quot;red&quot; value=&quot;4&quot; /&gt;
          <br />
          &lt;Radio name=&quot;fav&quot; description=&quot;Orange radio button&quot;
          color=&quot;orange&quot; value=&quot;5&quot; /&gt;
          <br />
          &lt;Radio name=&quot;fav&quot; description=&quot;Green radio button&quot;
          color=&quot;green&quot; value=&quot;6&quot; /&gt;
          <br />
          &lt;Radio name=&quot;fav&quot; description=&quot;Blue radio button&quot;
          color=&quot;blue&quot; value=&quot;7&quot; /&gt;
        </code>
      </Row>
    </>
  );
};

export default FormElements;
