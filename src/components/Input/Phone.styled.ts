import PhoneInputComponent from 'react-phone-input-2';
import styled from 'styled-components';
import * as S from './styled';

export const PhoneInput = styled(PhoneInputComponent)`
  display: none;
`;

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
