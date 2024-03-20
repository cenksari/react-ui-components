import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

const Introduction = () => (
  <Row className='margin-bottom'>
    <Heading type={1} color='black' text='React UI Components' />
    <p className='black'>
      You are free to download, change and use it anywhere. I will regularly update this template
      with new resources and pages I found on the web. Don&apos;t hesitate to participate by sending
      a PR! Maybe your first on Github :) Open an issue or a pull request to suggest changes or
      additions.
      <br />
      <br />
      If you like this resource, please follow me on GitHub. Thank you!.
      <br />
      <a className='blue' href='https://github.com/cenksari'>
        @cenksari
      </a>
      <br />
      <a className='blue' href='https://github.com/cenksari/react-ui-components'>
        https://www.cenksari.com
      </a>
      <br />
      <a className='blue' href='https://github.com/cenksari/react-ui-components'>
        https://github.com/cenksari/react-ui-components
      </a>
    </p>
  </Row>
);

export default Introduction;
