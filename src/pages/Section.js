import PropTypes from 'prop-types';

import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

const Section = ({ anchor, title, text, children }) => (
  <Row className='margin-bottom'>
    <a aria-label={anchor} id={anchor} href={anchor} />
    <Heading type={1} color='black' text={title} />
    <p className='black'>{text}</p>
    {children}
  </Row>
);

Section.propTypes = {
  anchor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
