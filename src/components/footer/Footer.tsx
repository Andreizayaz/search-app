import { FC, ReactElement } from 'react';

import { APP_NAME, PUBLISH_YEAR, APP_AUTHOR } from 'src/constants';

import './Footer.scss';

export const Footer: FC = (): ReactElement => (
  <footer className='footer'>
    <div className='footer__container container'>
      <div className='footer__info info'>
        <div className='info__app'>{APP_NAME}</div>
        <div className='info__github github'>
          <a className='github__link' href='https://github.com/Andreizayaz'>
            {APP_AUTHOR}
          </a>
        </div>
        <div className='info__year'>{PUBLISH_YEAR} &copy;</div>
      </div>
    </div>
  </footer>
);
