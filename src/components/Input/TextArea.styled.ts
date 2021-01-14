import styled from 'styled-components';
import * as S from './styled';

export const InputWrapper = styled(S.InputWrapper)`
  textarea {
    ${S.inputStyles};
  }
`;

export * from './styled';
