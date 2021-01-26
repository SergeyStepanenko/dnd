import styled, { css } from 'styled-components';
import { Typography } from '@/styled';
import { desktop, mobile } from '@/styled/mixins';

export const Description = styled(Typography)`
  font-size: 13px;

  ${desktop(css`
    text-align: center;
    margin-top: 12px;
    font-size: 17px;
  `)}

  padding-left: 18px;
  padding-right: 18px;
`;

export const Main = styled.main`
  ${mobile(css`
    padding-top: 53px;
  `)}
`;

export const Inner = styled.div<{ isBlur: boolean }>`
  ${({ isBlur }) =>
    isBlur &&
    css`
      filter: blur(18px);
    `}
`;
