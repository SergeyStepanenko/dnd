import React from 'react';
import * as S from './Modal.styled';
import { ITEMS } from '@/constants/sliderItems';
import IconClose from '../Icons/Close';

const Modal: React.FC<{ onCloseClick: () => void }> = ({ onCloseClick }) => {
  return (
    <>
      <S.Inner onClick={onCloseClick}>
        {ITEMS.map(({ title, imageSmall }, index) => (
          <S.Item
            key={index}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              event.stopPropagation();
            }}
          >
            <S.Image src={imageSmall} alt={title} />
            <S.Title>{title}</S.Title>
          </S.Item>
        ))}
      </S.Inner>
      <S.IconWrapper onClick={onCloseClick}>
        <IconClose />
      </S.IconWrapper>
    </>
  );
};

export default Modal;
