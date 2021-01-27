import React from 'react';
import { PageProps } from 'gatsby';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset-advanced';

import '@/css/fonts.css';
import theme from '@/styled/theme';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Content from '@/components/Content';
import Modal from '@/components/Modal';

import * as S from '../styled/Index.styled';

const GlobalStyle = createGlobalStyle<{ isModalOpen: boolean }>`
  ${reset};
 
  body {
    min-width: 320px;
    font-family: Monaco;
    font-weight: 500;

    ${({ isModalOpen }) =>
      isModalOpen &&
      css`
        overflow: hidden;
      `}
  }
`;

const Home: React.FC<PageProps> = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <GlobalStyle isModalOpen={isModalOpen} />
      <ThemeProvider theme={theme}>
        <S.Inner isBlur={isModalOpen}>
          <Header onMenuClick={() => setIsModalOpen(true)} />
          <S.Main>
            <S.Description as="h2" color="grey">
              Hi! We’re a small team that is focused on your success!
            </S.Description>
            <Content />
            <Form />
          </S.Main>
        </S.Inner>
        {isModalOpen && <Modal onCloseClick={() => setIsModalOpen(false)} />}
      </ThemeProvider>
    </>
  );
};

export default Home;
