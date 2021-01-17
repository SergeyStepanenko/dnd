import styled from 'styled-components';
import * as S from './styled';

export const InputWrapper = styled(S.InputWrapper)`
  textarea {
    ${S.inputStyles};
    resize: none;
  }
`;

export * from './styled';
