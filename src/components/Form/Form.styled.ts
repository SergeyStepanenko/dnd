import styled from 'styled-components';
import { palette } from '@/constants';

export const Form = styled.form`
  background-color: #262c36;
  padding-top: 56px;
  padding-bottom: 41px;

  & > * + * {
    margin-top: 26px;
  }
`;

export const Inner = styled.div`
  max-width: 705px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 990px) {
    display: flex;

    & > * + * {
      margin-left: 28px;
    }
  }
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

  @media only screen and (min-width: 990px) {
    margin: 32px auto 0;
  }

  &:hover {
    background-color: #009dffe0;
  }

  &:active {
    background-color: ${palette.blue};
  }
`;
