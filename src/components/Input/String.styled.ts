import styled, { css } from 'styled-components';
import * as S from './styled';

export const Input = styled.input<{ isError?: boolean }>`
  ${S.inputStyles};
`;

export * from './styled';
