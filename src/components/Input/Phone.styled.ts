import styled from 'styled-components';
import * as S from './styled';

export const InputWrapper = styled(S.InputWrapper)`
  .special-label {
    display: none;
  }

  .react-tel-input {
    width: 100%;
  }

  input {
    ${S.inputStyles};
  }
`;

export * from './styled';
