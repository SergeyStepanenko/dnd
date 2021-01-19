import React from 'react';
import * as S from './Slider.styled';
import { ITEMS } from './Slider.constants';
import SliderItem from './SliderItem';

const Slider: React.FC = () => {
  return (
    <S.Wrapper>
      {ITEMS.map((item) => (
        <SliderItem {...item} />
      ))}
    </S.Wrapper>
  );
};

export default Slider;
