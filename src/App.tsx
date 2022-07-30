import { FC, ReactElement } from 'react';

import { Header, Main, SearchBlock, Footer } from './components';

export const App: FC = (): ReactElement => (
  <>
    <Header />
    <Main>
      <SearchBlock />
    </Main>
    <Footer />
  </>
);
