import styled, { css } from 'styled-components';
import { palette } from '@/constants';
import * as S from './styled';

export const Input = styled.input<{ isError: boolean }>`
  ${S.inputStyles};
`;

export * from './styled';
