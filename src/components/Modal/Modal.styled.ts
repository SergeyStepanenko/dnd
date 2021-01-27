import styled, { css } from 'styled-components';
import { Typography } from '@/styled';
import { mobile } from '@/styled/mixins';

export const Inner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 137px 10%;
  overflow-y: scroll;

  & > * + * {
    margin-top: 30px;
  }

  ${mobile(css`
    padding-top: 60px;
  `)}
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 562px;
  border-radius: 20px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 8px 0px;
`;

export const Image = styled.img`
  display: block;
  width: 202px;
`;

export const Title = styled(Typography)`
  position: absolute;
  left: 32px;
  bottom: 22px;
`;

export const IconWrapper = styled.div`
  padding: 10px;
  position: fixed;
  top: 30px;
  right: 30px;
  font-size: 0;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }

  ${mobile(css`
    top: 20px;
    right: 20px;
  `)}
`;
