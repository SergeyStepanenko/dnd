import React from 'react';
import { PageProps } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

import '@/css/fonts.css';
import theme from '@/styled/theme';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Content from '@/components/Content';

const GlobalStyle = createGlobalStyle`
  ${reset};
 
  body {
    font-family: Monaco;
    font-weight: 500;
  }
`;

const Home: React.FC<PageProps> = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Content />
        <Form />
      </main>
    </ThemeProvider>
  </>
);

export default Home;
