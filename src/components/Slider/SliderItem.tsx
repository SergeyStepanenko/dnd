import React from 'react';
import * as S from './SliderItem.styled';
import { IItems } from '@/constants/sliderItems';

const SliderItem: React.FC<IItems> = ({
  slug,
  title,
  description,
  imageSmall,
}) => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Image src={imageSmall} alt={title} slug={slug} />
      </S.Inner>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
    </S.Wrapper>
  );
};

export default SliderItem;
