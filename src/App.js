import Row from './components/Containers/Row';
import Menu from './pages/Menu';
import Heading from './components/Elements/Heading';

import Cards from './pages/Cards';
import Badges from './pages/Badges';
import Alerts from './pages/Alerts';
import Buttons from './pages/Buttons';
import Tabbars from './pages/Tabbars';
import Loaders from './pages/Loaders';
import Dialogs from './pages/Dialogs';
import Modals from './pages/Modals';
import Headings from './pages/Headings';
import Paginations from './pages/Paginations';
import Breadcrumbs from './pages/Breadcrumbs';
import Carousels from './pages/Carousels';
import Dropdowns from './pages/Dropdowns';
import FormElements from './pages/FormElements';
import ProfilePhotos from './pages/ProfilePhotos';

function App() {
  return (
    <div className='container'>
      <Menu />
      <div className='content'>
        <Row className='margin-bottom'>
          <Heading type={1} color='black' text='React UI Components' />
          <p className='black'>
            You are free to download, change and use it anywhere. I will regularly update this
            template with new resources and pages I found on the web. Don&apos;t hesitate to
            participate by sending a PR! Maybe your first on Github :) Open an issue or a pull
            request to suggest changes or additions.
            <br />
            <br />
            If you like this resource, please follow me on GitHub. Thank you!.
            <br />
            <a className='blue' href='https://github.com/cenksari'>
              @cenksari
            </a>
            <br />
            <a className='blue' href='https://github.com/cenksari/react-ui-components'>
              https://github.com/cenksari/react-ui-components
            </a>
          </p>
        </Row>

        <Row className='margin-bottom'>
          <a aria-label='buttons' id='buttons' href='#buttons' />
          <Heading type={1} color='black' text='Button' />
          <p className='black'>Colored button components list.</p>
        </Row>
        <Buttons />

        <Row className='margin-bottom'>
          <a aria-label='form-elements' id='form-elements' href='#form-elements' />
          <Heading type={1} color='black' text='Form elements' />
          <p className='black'>Basic form elements list.</p>
        </Row>
        <FormElements />

        <Row className='margin-bottom'>
          <a aria-label='profile-photos' id='profile-photos' href='#profile-photos' />
          <Heading type={1} color='black' text='Profile photo' />
          <p className='gray'>Profile photos with different sizes.</p>
        </Row>
        <ProfilePhotos />

        <Row className='margin-bottom'>
          <a aria-label='tabs' id='tabs' href='#tabs' />
          <Heading type={1} color='black' text='Tab' />
          <p className='gray'>Tab components. You can also use color tags.</p>
        </Row>
        <Tabbars />

        <Row className='margin-bottom'>
          <a aria-label='headings' id='headings' href='#headings' />
          <Heading type={1} color='black' text='Heading' />
          <p className='gray'>Heading components. You can also use color tags.</p>
        </Row>
        <Headings />

        <Row className='margin-bottom'>
          <a aria-label='cards' id='cards' href='#cards' />
          <Heading type={1} color='black' text='Card' />
          <p className='gray'>Card components. You can also use color tags for buttons.</p>
        </Row>
        <Cards />

        <Row className='margin-bottom'>
          <a aria-label='alerts' id='alerts' href='#alerts' />
          <Heading type={1} color='black' text='Alert' />
          <p className='gray'>Alert components.</p>
        </Row>
        <Alerts />

        <Row className='margin-bottom'>
          <a aria-label='badges' id='badges' href='#badges' />
          <Heading type={1} color='black' text='Badge' />
          <p className='gray'>Badge components.</p>
        </Row>
        <Badges />

        <Row className='margin-bottom'>
          <a aria-label='loaders' id='loaders' href='#loaders' />
          <Heading type={1} color='black' text='Loader' />
          <p className='gray'>Loader components. You can also use color tags for buttons.</p>
        </Row>
        <Loaders />

        <Row className='margin-bottom'>
          <a aria-label='dialogs' id='dialogs' href='#dialogs' />
          <Heading type={1} color='black' text='Dialog' />
          <p className='gray'>Dialog components. You can also use color tags for buttons.</p>
        </Row>
        <Dialogs />

        <Row className='margin-bottom'>
          <a aria-label='modals' id='modals' href='#modals' />
          <Heading type={1} color='black' text='Modal' />
          <p className='gray'>Modal components.</p>
        </Row>
        <Modals />

        <Row className='margin-bottom'>
          <a aria-label='dropdowns' id='dropdowns' href='#dropdowns' />
          <Heading type={1} color='black' text='Dropdown' />
          <p className='gray'>Dropdown components. You can also use color tags.</p>
        </Row>
        <Dropdowns />

        <Row className='margin-bottom'>
          <a aria-label='pagination' id='pagination' href='#pagination' />
          <Heading type={1} color='black' text='Pagination' />
          <p className='gray'>Pagination components. You can also use color tags.</p>
        </Row>
        <Paginations />

        <Row className='margin-bottom'>
          <a aria-label='breadcrumb' id='breadcrumb' href='#breadcrumb' />
          <Heading type={1} color='black' text='Breadcrumb' />
          <p className='gray'>Breadcrumb components. You can also use color tags.</p>
        </Row>
        <Breadcrumbs />

        <Row className='margin-bottom'>
          <a aria-label='carousel' id='carousel' href='#carousel' />
          <Heading type={1} color='black' text='Carousel' />
          <p className='gray'>Carousel components. You can also use color tags.</p>
        </Row>
        <Carousels />
      </div>
    </div>
  );
}

export default App;
