import { css } from 'styled-components';

export function mobile(styles: ReturnType<typeof css>) {
  return css`
    @media only screen and (max-width: 990px) {
      ${styles};
    }
  `;
}

export function desktop(styles: ReturnType<typeof css>) {
  return css`
    @media only screen and (min-width: 991px) {
      ${styles};
    }
  `;
}
