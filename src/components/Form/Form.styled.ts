import styled, { css } from 'styled-components';
import { palette } from '@/constants';
import { Typography } from '@/styled';
import { mobile, desktop } from '@/styled/mixins';
import { InputContainer } from '../Input/styled';

export const Form = styled.form`
  background-color: #262c36;
  padding-top: 56px;
  padding-bottom: 41px;
  font-size: 30px;

  ${mobile(css`
    padding-top: 27px;
    padding-left: 20px;
    padding-right: 20px;

    ${InputContainer} {
      margin-top: 23px;
    }

    ${InputContainer}:first-of-type {
      margin-top: 0;
    }
  `)}

  ${desktop(css`
    & > * + * {
      margin-top: 26px;
    }
  `)}

  ${mobile(css`
    margin-top: 53px;
  `)}
`;

export const Inner = styled.div`
  max-width: 705px;
  margin-left: auto;
  margin-right: auto;

  ${desktop(css`
    display: flex;

    & > * + * {
      margin-left: 28px;
    }
  `)}

  ${mobile(css`
    margin-top: 32px;
  `)}
`;

export const Submit = styled.input`
  width: 336px;
  height: 59px;
  padding: 19px;
  border-radius: 5px;
  background-color: ${palette.blue};
  font-family: Aileron;
  font-size: 18px;
  color: ${palette.white};
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  border: 0;
  outline: none;
  margin: 24px auto 0;
  display: block;

  ${desktop(css`
    margin: 32px auto 0;
  `)}

  &:hover {
    background-color: #009dffe0;
  }

  &:active {
    background-color: ${palette.blue};
  }
`;

export const Title = styled(Typography).attrs(() => ({ as: 'h2' }))`
  color: ${palette.white};
  text-align: center;
  font-size: 23px;

  ${desktop(css`
    font-size: 30px;
  `)}
`;
