import styled, { css } from 'styled-components';
import * as S from './styled';
import { Typography } from '@/styled';
import { palette } from '@/constants';
import { desktop, mobile } from '@/styled/mixins';
import InputString from './String';

export * from './styled';

export const Checkbox = styled.div.attrs(() => ({
  as: 'div',
  color: palette.white,
}))`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const CheckboxesContainer = styled.div`
  ${mobile(css`
    & > * {
      margin-top: 14px;
    }
  `)}

  ${desktop(css`
    display: flex;
    justify-content: space-between;
    margin-top: 21px;

    & > * + * {
      margin-left: 29px;
    }
  `)}
`;

export const Name = styled(Typography)`
  position: relative;
  top: 1px;
  font-size: 17px;
`;

export const InputOther = styled(InputString)`
  margin-top: 15px;
`;
