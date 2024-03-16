import Row from './components/Containers/Row';
import Heading from './components/Elements/Heading';

import Cards from './pages/Cards';
import Buttons from './pages/Buttons';
import Tabbars from './pages/Tabbars';
import Headings from './pages/Headings';
import FormElements from './pages/FormElements';
import ProfilePhotos from './pages/ProfilePhotos';

function App() {
  return (
    <div className='container'>
      <Row className='margin-bottom'>
        <Heading type={1} className='black' text='Buttons' />
        <p className='black'>Colored button components list.</p>
      </Row>
      <Buttons />

      <Row className='margin-bottom'>
        <Heading type={1} className='black' text='Form elements' />
        <p className='black'>Basic form elements list.</p>
      </Row>
      <FormElements />

      <Row className='margin-bottom'>
        <Heading type={1} className='black' text='Profile photos' />
        <p className='gray'>Profile photos with different sizes.</p>
      </Row>
      <ProfilePhotos />

      <Row className='margin-bottom'>
        <Heading type={1} className='black' text='Tabs' />
        <p className='gray'>Tab components.</p>
      </Row>
      <Tabbars />

      <Row className='margin-bottom'>
        <Heading type={1} className='black' text='Headings' />
        <p className='gray'>Heading components. You can also use color tags.</p>
      </Row>
      <Headings />

      <Row className='margin-bottom'>
        <Heading type={1} className='black' text='Cards' />
        <p className='gray'>Card components. You can also use color tags for buttons.</p>
      </Row>
      <Cards />
    </div>
  );
}

export default App;
