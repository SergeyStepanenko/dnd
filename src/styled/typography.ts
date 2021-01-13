import styled, { css } from 'styled-components';
import {
  color,
  space,
  SpaceProps,
  TextColorProps,
  fontSize,
  FontSizeProps,
} from 'styled-system';
import theme from '@/styled/theme';

interface ITypographyProps
  extends SpaceProps,
    TextColorProps<typeof theme>,
    FontSizeProps {
  variant?: 'h1' | 'h2' | 't1';
}

export const Typography = styled.p<ITypographyProps>`
  ${({ variant = 't1' }) => {
    switch (variant) {
      case 'h1':
      case 'h2':
        return css`
          font-family: Aileron-Bold;
        `;

      case 't1':
        return css`
          font-family: Monaco;
        `;
    }
  }};

  ${color};
  ${space};
  ${fontSize};
`;
