import styled, { css } from 'styled-components';
import { Typography } from '@/styled';
import { palette } from '@/constants';

export const inputStyles = css<{ isError?: boolean }>`
  width: 100%;
  margin-top: 8px;
  display: block;
  border: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
  font-size: 17px;
  font-family: Monaco;
  color: white;
  padding-bottom: 15px;
  padding-right: 20px;
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

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:-webkit-autofill::first-line {
    font-size: 17px;
    font-family: Monaco;
  }

  ${({ isError }) =>
    isError
      ? css`
          border-color: ${palette.red};
        `
      : css`
          &:focus {
            border-color: ${palette.blue};
          }
        `}
`;

export const Label = styled(Typography).attrs(() => ({
  as: 'label',
  color: 'white',
}))`
  width: 100%;
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ErrorText = styled(Typography)`
  color: ${palette.red};
  font-size: 13px;
`;
