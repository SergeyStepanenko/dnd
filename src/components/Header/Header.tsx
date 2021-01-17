import React from 'react';
import * as S from './Header.styled';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderInner>
        <S.Link href="/" target="_blank">
          <S.IconInstagram />
        </S.Link>
        <S.Title variant="h1" as="h1" color="black">
          Design and Development
        </S.Title>
        <S.IconBurger />
      </S.HeaderInner>
      <S.Description as="h2" color="grey">
        Hi! We’re a small team that is focused on your success!
      </S.Description>
    </S.Header>
  );
};

export default Header;
