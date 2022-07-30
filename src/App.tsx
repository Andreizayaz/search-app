import { FC, ReactElement } from 'react';

import { Header, Main, Footer } from './components';

export const App: FC = (): ReactElement => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
