import Row from './components/Containers/Row';
import Heading from './components/Elements/Heading';

import Cards from './pages/Cards';
import Alerts from './pages/Alerts';
import Buttons from './pages/Buttons';
import Tabbars from './pages/Tabbars';
import Headings from './pages/Headings';
import FormElements from './pages/FormElements';
import ProfilePhotos from './pages/ProfilePhotos';

function App() {
  return (
    <div className='container'>
      <div className='menu'>
        <ul>
          <li>
            <a href='#buttons'>Buttons</a>
          </li>
          <li className='indent'>
            <a href='#b-colored'>Colored</a>
          </li>
          <li className='indent'>
            <a href='#b-disabled'>Disabled</a>
          </li>
          <li>
            <a href='#form-elements'>Form elements</a>
          </li>
          <li className='indent'>
            <a href='#input'>Input</a>
          </li>
          <li className='indent'>
            <a href='#textarea'>Textarea</a>
          </li>
          <li className='indent'>
            <a href='#select'>Select</a>
          </li>
          <li className='indent'>
            <a href='#switch'>Switch</a>
          </li>
          <li className='indent'>
            <a href='#radio'>Radio button</a>
          </li>
          <li>
            <a href='#profile-photos'>Profile photos</a>
          </li>
          <li className='indent'>
            <a href='#pp-big'>Big</a>
          </li>
          <li className='indent'>
            <a href='#pp-large'>Large</a>
          </li>
          <li className='indent'>
            <a href='#pp-medium'>Medium</a>
          </li>
          <li className='indent'>
            <a href='#pp-small'>Small</a>
          </li>
          <li className='indent'>
            <a href='#pp-text'>with text</a>
          </li>
          <li className='indent'>
            <a href='#pp-avatar'>Text avatar</a>
          </li>
          <li>
            <a href='#tabs'>Tabs</a>
          </li>
          <li>
            <a href='#headings'>Headings</a>
          </li>
          <li className='indent'>
            <a href='#h1'>Heading 1</a>
          </li>
          <li className='indent'>
            <a href='#h2'>Heading 2</a>
          </li>
          <li className='indent'>
            <a href='#h3'>Heading 3</a>
          </li>
          <li className='indent'>
            <a href='#h4'>Heading 4</a>
          </li>
          <li className='indent'>
            <a href='#h5'>Heading 5</a>
          </li>
          <li className='indent'>
            <a href='#h6'>Heading 6</a>
          </li>
          <li>
            <a href='#cards'>Cards</a>
          </li>
          <li className='indent'>
            <a href='#c-large'>Large card</a>
          </li>
          <li className='indent'>
            <a href='#c-medium'>Medium card</a>
          </li>
          <li className='indent'>
            <a href='#c-small'>Small card</a>
          </li>
          <li>
            <a href='#alerts'>Alerts</a>
          </li>
          <li className='indent'>
            <a href='#a-info'>Info</a>
          </li>
          <li className='indent'>
            <a href='#a-error'>Error</a>
          </li>
          <li className='indent'>
            <a href='#a-warning'>Warning</a>
          </li>
          <li className='indent'>
            <a href='#a-success'>Success</a>
          </li>
        </ul>
      </div>
      <div className='content'>
        <Row className='margin-bottom'>
          <Heading type={1} className='black' text='React UI Components' />
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
          <Heading type={1} className='black' text='Buttons' />
          <p className='black'>Colored button components list.</p>
        </Row>
        <Buttons />

        <Row className='margin-bottom'>
          <a aria-label='form-elements' id='form-elements' href='#form-elements' />
          <Heading type={1} className='black' text='Form elements' />
          <p className='black'>Basic form elements list.</p>
        </Row>
        <FormElements />

        <Row className='margin-bottom'>
          <a aria-label='profile-photos' id='profile-photos' href='#profile-photos' />
          <Heading type={1} className='black' text='Profile photos' />
          <p className='gray'>Profile photos with different sizes.</p>
        </Row>
        <ProfilePhotos />

        <Row className='margin-bottom'>
          <a aria-label='tabs' id='tabs' href='#tabs' />
          <Heading type={1} className='black' text='Tabs' />
          <p className='gray'>Tab components.</p>
        </Row>
        <Tabbars />

        <Row className='margin-bottom'>
          <a aria-label='headings' id='headings' href='#headings' />
          <Heading type={1} className='black' text='Headings' />
          <p className='gray'>Heading components. You can also use color tags.</p>
        </Row>
        <Headings />

        <Row className='margin-bottom'>
          <a aria-label='cards' id='cards' href='#cards' />
          <Heading type={1} className='black' text='Cards' />
          <p className='gray'>Card components. You can also use color tags for buttons.</p>
        </Row>
        <Cards />

        <Row className='margin-bottom'>
          <a aria-label='alerts' id='alerts' href='#alerts' />
          <Heading type={1} className='black' text='Alerts' />
          <p className='gray'>Alert components.</p>
        </Row>
        <Alerts />
      </div>
    </div>
  );
}

export default App;
