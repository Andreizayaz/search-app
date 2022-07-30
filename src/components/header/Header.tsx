import { FC, ReactElement } from 'react';

import { HOME_LINK } from 'src/constants';

import './Header.scss';

export const Header: FC = (): ReactElement => (
  <header className='header'>
    <div className='container'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand logo' href='#'></a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav navbar'>
              <a className='nav-link navbar__link' aria-current='page' href='#'>
                {HOME_LINK}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
);
