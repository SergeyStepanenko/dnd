import styled, { css } from 'styled-components';
import { desktop, mobile } from '@/styled/mixins';
import { FontFamilyAileron } from '@/constants';
import { EImageSlug } from './Slider.constants';

export const Title = styled.p`
  ${FontFamilyAileron};
  text-align: center;

  ${mobile(css`
    font-size: 20px;
  `)}

  ${desktop(css`
    font-size: 30px;
    margin-top: 19px;
  `)}
`;

export const Description = styled.p`
  color: #454f63;
  text-align: center;

  ${mobile(css`
    font-size: 13px;
  `)}

  ${desktop(css`
    font-size: 17px;
    margin-top: 11px;
  `)}
`;

export const Image = styled.img<{ slug: EImageSlug }>`
  ${({ slug }: { slug: EImageSlug }) => {
    switch (slug) {
      case EImageSlug.Logos:
        return css`
          ${desktop(css`
            width: 202px;
            height: 172px;
          `)};

          ${mobile(css`
            width: 129px;
            height: 110px;
            margin: 76px 30%;
          `)}
        `;

      case EImageSlug.Nature:
        return css`
          ${desktop(css`
            width: 420px;
            height: auto;
          `)};

          ${mobile(css`
            width: 100%;
          `)}
        `;

      default:
        break;
    }
  }}
`;

export const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  border-radius: 20px;
  overflow: hidden;

  ${desktop(css`
    width: 527px;
    height: 419px;
  `)}

  ${mobile(css`
    width: 100%;
  `)}
`;

export const Info = styled.figcaption`
  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;
  `)}
`;
