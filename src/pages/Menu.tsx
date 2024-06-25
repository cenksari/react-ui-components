import React from 'react';

import useWindowDimensions from '../hooks/useWindowDimensions';

interface IProps {
  menuState: () => void;
}

const Menu = ({ menuState }: IProps): React.JSX.Element => {
  const { width } = useWindowDimensions();

  const handleClickScroll = (e: any) => {
    e.preventDefault();

    if (width <= 800) {
      menuState();
    }

    document.location = e.target.href;
  };

  return (
    <div className='menu'>
      <button className='responsive-hide' type='button' onClick={() => menuState()}>
        <i className='material-icons'>close</i>
      </button>
      <div className='inner'>
        <ul>
          <li>
            &bull;{' '}
            <a href='#buttons' onClick={handleClickScroll}>
              Button
            </a>
          </li>
          <li className='indent'>
            <a href='#b-gray' onClick={handleClickScroll}>
              Gray
            </a>
          </li>
          <li className='indent'>
            <a href='#b-yellow' onClick={handleClickScroll}>
              Yellow
            </a>
          </li>
          <li className='indent'>
            <a href='#b-purple' onClick={handleClickScroll}>
              Purple
            </a>
          </li>
          <li className='indent'>
            <a href='#b-red' onClick={handleClickScroll}>
              Red
            </a>
          </li>
          <li className='indent'>
            <a href='#b-orange' onClick={handleClickScroll}>
              Orange
            </a>
          </li>
          <li className='indent'>
            <a href='#b-green' onClick={handleClickScroll}>
              Green
            </a>
          </li>
          <li className='indent'>
            <a href='#b-blue' onClick={handleClickScroll}>
              Blue
            </a>
          </li>
          <li className='indent'>
            <a href='#b-disabled' onClick={handleClickScroll}>
              Disabled
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#button-groups' onClick={handleClickScroll}>
              Button group
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#sliders' onClick={handleClickScroll}>
              Slider
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#form-elements' onClick={handleClickScroll}>
              Form elements
            </a>
          </li>
          <li className='indent'>
            <a href='#input' onClick={handleClickScroll}>
              Input
            </a>
          </li>
          <li className='indent'>
            <a href='#textarea' onClick={handleClickScroll}>
              Textarea
            </a>
          </li>
          <li className='indent'>
            <a href='#select' onClick={handleClickScroll}>
              Select
            </a>
          </li>
          <li className='indent'>
            <a href='#switch' onClick={handleClickScroll}>
              Switch
            </a>
          </li>
          <li className='indent'>
            <a href='#radio' onClick={handleClickScroll}>
              Radio button
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#profile-photos' onClick={handleClickScroll}>
              Profile photo
            </a>
          </li>
          <li className='indent'>
            <a href='#pp-big' onClick={handleClickScroll}>
              Big
            </a>
          </li>
          <li className='indent'>
            <a href='#pp-large' onClick={handleClickScroll}>
              Large
            </a>
          </li>
          <li className='indent'>
            <a href='#pp-medium' onClick={handleClickScroll}>
              Medium
            </a>
          </li>
          <li className='indent'>
            <a href='#pp-small' onClick={handleClickScroll}>
              Small
            </a>
          </li>
          <li className='indent'>
            <a href='#pp-text' onClick={handleClickScroll}>
              with text
            </a>
          </li>
          <li className='indent'>
            <a href='#pp-avatar' onClick={handleClickScroll}>
              Text avatar
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#tabs' onClick={handleClickScroll}>
              Tab
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#headings' onClick={handleClickScroll}>
              Heading
            </a>
          </li>
          <li className='indent'>
            <a href='#h1' onClick={handleClickScroll}>
              Heading 1
            </a>
          </li>
          <li className='indent'>
            <a href='#h2' onClick={handleClickScroll}>
              Heading 2
            </a>
          </li>
          <li className='indent'>
            <a href='#h3' onClick={handleClickScroll}>
              Heading 3
            </a>
          </li>
          <li className='indent'>
            <a href='#h4' onClick={handleClickScroll}>
              Heading 4
            </a>
          </li>
          <li className='indent'>
            <a href='#h5' onClick={handleClickScroll}>
              Heading 5
            </a>
          </li>
          <li className='indent'>
            <a href='#h6' onClick={handleClickScroll}>
              Heading 6
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#cards' onClick={handleClickScroll}>
              Card
            </a>
          </li>
          <li className='indent'>
            <a href='#c-large' onClick={handleClickScroll}>
              Large
            </a>
          </li>
          <li className='indent'>
            <a href='#c-medium' onClick={handleClickScroll}>
              Medium
            </a>
          </li>
          <li className='indent'>
            <a href='#c-small' onClick={handleClickScroll}>
              Small
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#alerts' onClick={handleClickScroll}>
              Alert
            </a>
          </li>
          <li className='indent'>
            <a href='#a-info' onClick={handleClickScroll}>
              Info
            </a>
          </li>
          <li className='indent'>
            <a href='#a-error' onClick={handleClickScroll}>
              Error
            </a>
          </li>
          <li className='indent'>
            <a href='#a-warning' onClick={handleClickScroll}>
              Warning
            </a>
          </li>
          <li className='indent'>
            <a href='#a-success' onClick={handleClickScroll}>
              Success
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#badges' onClick={handleClickScroll}>
              Badge
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#notifications' onClick={handleClickScroll}>
              Notification
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#loaders' onClick={handleClickScroll}>
              Loader
            </a>
          </li>
          <li className='indent'>
            <a href='#l-inline' onClick={handleClickScroll}>
              Inline
            </a>
          </li>
          <li className='indent'>
            <a href='#l-full' onClick={handleClickScroll}>
              Full screen
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#dialogs' onClick={handleClickScroll}>
              Dialog
            </a>
          </li>
          <li className='indent'>
            <a href='#d-classic' onClick={handleClickScroll}>
              Classic
            </a>
          </li>
          <li className='indent'>
            <a href='#d-action' onClick={handleClickScroll}>
              with action button
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#modals' onClick={handleClickScroll}>
              Modal
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#dropdowns' onClick={handleClickScroll}>
              Dropdown
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#paginations' onClick={handleClickScroll}>
              Pagination
            </a>
          </li>
          <li className='indent'>
            <a href='#p-less' onClick={handleClickScroll}>
              Less pages
            </a>
          </li>
          <li className='indent'>
            <a href='#p-more' onClick={handleClickScroll}>
              More pages
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#breadcrumbs' onClick={handleClickScroll}>
              Breadcrumb
            </a>
          </li>
        </ul>
        <ul>
          <li>
            &bull;{' '}
            <a href='#carousels' onClick={handleClickScroll}>
              Carousel
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
