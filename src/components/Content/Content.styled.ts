import styled, { css } from 'styled-components';
import { mobile, desktop } from '@/styled/mixins';

export const Wrapper = styled.div`
  ${mobile(css`
    margin-top: 38px;
  `)}

  ${desktop(css`
    margin-top: 51px;
    margin-bottom: 71px;
  `)}
`;
