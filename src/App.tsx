import Menu from './pages/Menu';
import Section from './pages/Section';
import Introduction from './pages/Introduction';

import Cards from './pages/Cards';
import Badges from './pages/Badges';
import Alerts from './pages/Alerts';
import Modals from './pages/Modals';
import Buttons from './pages/Buttons';
import Tabbars from './pages/Tabbars';
import Loaders from './pages/Loaders';
import Dialogs from './pages/Dialogs';
import Sliders from './pages/Sliders';
import Headings from './pages/Headings';
import Carousels from './pages/Carousels';
import Dropdowns from './pages/Dropdowns';
import Paginations from './pages/Paginations';
import Breadcrumbs from './pages/Breadcrumbs';
import FormElements from './pages/FormElements';
import ButtonGroups from './pages/ButtonGroups';
import ProfilePhotos from './pages/ProfilePhotos';
import Notifications from './pages/Notifications';

const App = (): React.JSX.Element => {
  const menuState = (): void => {
    const elements = document.getElementsByClassName('menu');

    const element: any = elements[0];

    const currentDisplay = element.style.display;

    if (currentDisplay === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  };

  return (
    <>
      <header>
        <button type='button' className='responsive-hide' onClick={() => menuState()}>
          <i className='material-icons'>menu</i>
        </button>
        <a aria-label='github' href='https://github.com/cenksari/react-ui-components'>
          React UI Components
        </a>
      </header>
      <div className='container'>
        <Menu menuState={menuState} />
        <div className='content'>
          <Introduction />

          <Section
            anchor='buttons'
            title='Button'
            text='Button components. You can also use color tags.'
          >
            <Buttons />
          </Section>

          <Section
            anchor='button-groups'
            title='Button group'
            text='Button group components. You can also use color tags.'
          >
            <ButtonGroups />
          </Section>

          <Section
            anchor='sliders'
            title='Slider'
            text='Slider group components. You can also use color tags.'
          >
            <Sliders />
          </Section>

          <Section anchor='form-elements' title='Form elements' text='Basic form elements list.'>
            <FormElements />
          </Section>

          <Section
            anchor='profile-photos'
            title='Profile photo'
            text='Profile photos and avatars with different sizes.'
          >
            <ProfilePhotos />
          </Section>

          <Section
            anchor='tabs'
            title='Tab'
            text='Tab bar components. You can also use color tags.'
          >
            <Tabbars />
          </Section>

          <Section
            anchor='headings'
            title='Heading'
            text='Heading components. You can also use color tags.'
          >
            <Headings />
          </Section>

          <Section
            anchor='cards'
            title='Card'
            text='Card components. You can also use color tags for buttons.'
          >
            <Cards />
          </Section>

          <Section anchor='alerts' title='Alert' text='Alert components.'>
            <Alerts />
          </Section>

          <Section
            anchor='badges'
            title='Badge'
            text='Badge components. You can also use color tags.'
          >
            <Badges />
          </Section>

          <Section
            anchor='notifications'
            title='Notification'
            text='Notification components. You can also use color tags.'
          >
            <Notifications />
          </Section>

          <Section
            anchor='loaders'
            title='Loader'
            text='Loader components. You can also use color tags for buttons.'
          >
            <Loaders />
          </Section>

          <Section
            anchor='dialogs'
            title='Dialog'
            text='Dialog components. You can also use color tags for buttons.'
          >
            <Dialogs />
          </Section>

          <Section anchor='modals' title='Modal' text='Modal window components.'>
            <Modals />
          </Section>

          <Section
            anchor='dropdowns'
            title='Dropdown'
            text='Dropdown components. You can also use color tags.'
          >
            <Dropdowns />
          </Section>

          <Section anchor='paginations' title='Pagination' text='Pagination components.'>
            <Paginations />
          </Section>

          <Section
            anchor='breadcrumbs'
            title='Breadcrumb'
            text='Breadcrumb components. You can also use color tags.'
          >
            <Breadcrumbs />
          </Section>

          <Section
            anchor='carousels'
            title='Carousel'
            text='Carousel components. You can also use color tags.'
          >
            <Carousels />
          </Section>
        </div>
      </div>
      <footer>
        <a aria-label='github' href='https://github.com/cenksari/react-ui-components'>
          React UI Components
        </a>
      </footer>
    </>
  );
};

export default App;
