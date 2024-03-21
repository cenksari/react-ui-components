import { useState } from 'react';

import Row from '../components/Containers/Row';
import Slider from '../components/Forms/Slider';

const Sliders = () => {
  const [value, setValue] = useState(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Row className='margin-bottom'>
      <Slider color='gray' name='volume1' min={0} max={10} value={value} onChange={handleChange} />
      <Slider
        color='yellow'
        name='volume2'
        min={0}
        max={10}
        value={value}
        onChange={handleChange}
      />
      <Slider
        color='purple'
        name='volume3'
        min={0}
        max={10}
        value={value}
        onChange={handleChange}
      />
      <Slider color='red' name='volume4' min={0} max={10} value={value} onChange={handleChange} />
      <Slider
        color='orange'
        name='volume5'
        min={0}
        max={10}
        value={value}
        onChange={handleChange}
      />
      <Slider color='green' name='volume6' min={0} max={10} value={value} onChange={handleChange} />
      <Slider color='blue' name='volume7' min={0} max={10} value={value} onChange={handleChange} />
      <code>
        &lt;Slider color=&apos;gray&apos; name=&apos;volume1&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;yellow&apos; name=&apos;volume2&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;purple&apos; name=&apos;volume3&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;red&apos; name=&apos;volume4&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;orange&apos; name=&apos;volume5&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;green&apos; name=&apos;volume6&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
        <br />
        &lt;Slider color=&apos;blue&apos; name=&apos;volume7&apos; min={'{0}'} max={'{10}'} value=
        {'{5}'} onChange={'{() => {}}'} /&gt;
      </code>
    </Row>
  );
};

export default Sliders;
