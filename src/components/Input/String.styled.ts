import styled from 'styled-components';
import { Typography } from '@/styled';

export const Label = styled(Typography).attrs(() => ({
  as: 'label',
  color: 'white',
}))`
  font-size: 12px;
`;

export const Input = styled.input`
  margin-top: 6px;
  display: block;
  border: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
  font-size: 17px;
  font-family: Monaco;
  color: white;
  padding-bottom: 15px;
  border-bottom: solid 2px rgba(255, 255, 255, 0.2);

  &::placeholder {
    opacity: 0.5;
  }

  &:-ms-input-placeholder {
    opacity: 0.5;
  }

  &::-ms-input-placeholder {
    opacity: 0.5;
  }

  &:focus {
    border-color: #009dff;
  }
`;
