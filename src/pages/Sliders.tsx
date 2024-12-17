import { useState } from 'react';

import Row from '../components/Containers/Row';
import Slider from '../components/Forms/Slider';

const Sliders: React.FC = () => {
  const [value1, setValue1] = useState<number>(1);
  const [value2, setValue2] = useState<number>(2);
  const [value3, setValue3] = useState<number>(3);
  const [value4, setValue4] = useState<number>(4);
  const [value5, setValue5] = useState<number>(5);
  const [value6, setValue6] = useState<number>(6);
  const [value7, setValue7] = useState<number>(7);

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(+e.target.value);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(+e.target.value);
  };

  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue3(+e.target.value);
  };

  const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue4(+e.target.value);
  };

  const handleChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue5(+e.target.value);
  };

  const handleChange6 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue6(+e.target.value);
  };

  const handleChange7 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue7(+e.target.value);
  };

  return (
    <Row className='margin-bottom'>
      <Slider
        color='gray'
        name='volume1'
        min={0}
        max={10}
        value={value1}
        onChange={handleChange1}
      />
      <Slider
        color='yellow'
        name='volume2'
        min={0}
        max={10}
        value={value2}
        onChange={handleChange2}
      />
      <Slider
        color='purple'
        name='volume3'
        min={0}
        max={10}
        value={value3}
        onChange={handleChange3}
      />
      <Slider color='red' name='volume4' min={0} max={10} value={value4} onChange={handleChange4} />
      <Slider
        color='orange'
        name='volume5'
        min={0}
        max={10}
        value={value5}
        onChange={handleChange5}
      />
      <Slider
        color='green'
        name='volume6'
        min={0}
        max={10}
        value={value6}
        onChange={handleChange6}
      />
      <Slider
        color='blue'
        name='volume7'
        min={0}
        max={10}
        value={value7}
        onChange={handleChange7}
      />
      <code>
        &lt;Slider color=&apos;gray&apos; name=&apos;volume1&apos; min={'{0}'} max={'{10}'} value=
        {'{1}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;yellow&apos; name=&apos;volume2&apos; min={'{0}'} max={'{10}'} value=
        {'{2}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;purple&apos; name=&apos;volume3&apos; min={'{0}'} max={'{10}'} value=
        {'{3}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;red&apos; name=&apos;volume4&apos; min={'{0}'} max={'{10}'} value=
        {'{4}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;orange&apos; name=&apos;volume5&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;green&apos; name=&apos;volume6&apos; min={'{0}'} max={'{10}'} value=
        {'{6}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;blue&apos; name=&apos;volume7&apos; min={'{0}'} max={'{10}'} value=
        {'{7}'} onChange={'{() => {}}'} /&gt;
      </code>
    </Row>
  );
};

export default Sliders;
