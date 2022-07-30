import { FC, ReactElement } from 'react';

import './Footer.scss';

export const Footer: FC = (): ReactElement => (
  <footer className='footer'>
    <div className='footer__container container'>
      <div className='footer__info info'>
        <div className='info__app'>Search App</div>
        <div className='info__github github'>
          <a className='github__link' href='https://github.com/Andreizayaz'>
            Andrew Podislenkov
          </a>
        </div>
        <div className='info__year'>2022 &copy;</div>
      </div>
    </div>
  </footer>
);
