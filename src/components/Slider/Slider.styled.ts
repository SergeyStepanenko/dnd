import styled, { css } from 'styled-components';
import { desktop } from '@/styled/mixins';

export const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ${desktop(css`
    & > * + * {
      margin-left: 30px;
    }
  `)}
`;
