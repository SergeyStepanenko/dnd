import React from 'react';
import Slider from '../Slider';
import * as S from './Content.styled';

export const Content: React.FC = () => {
  return (
    <S.Wrapper>
      <Slider />
    </S.Wrapper>
  );
};

export default Content;
