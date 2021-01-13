import React from 'react';
import { PageProps } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

import '@/css/fonts.css';
import theme from '@/styled/theme';
import Header from '@/components/Header';
import Form from '@/components/Form';

const GlobalStyle = createGlobalStyle`
  ${reset};
 
  body {
    font-family: Monaco;
    font-weight: 500;
  }

  @media only screen and (max-width: 991px) {
    body {
      padding-top: 15px;
      padding-left: 18px;
      padding-right: 18px;
    }
  }
`;

const Home: React.FC<PageProps> = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Form />
      </main>
    </ThemeProvider>
  </>
);

export default Home;
