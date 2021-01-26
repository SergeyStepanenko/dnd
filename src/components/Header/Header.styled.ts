import styled, { css } from 'styled-components';
import { Typography } from '@/styled';
import { mobile, desktop } from '@/styled/mixins';
import IconInstagramComponent from '../Icons/Instagram';
import IconBurgerComponent from '../Icons/Burger';

export const Title = styled(Typography)`
  ${mobile(css`
    font-size: 23px;
  `)}

  ${desktop(css`
    font-size: 40px;
  `)}
`;

export const Link = styled.a`
  ${mobile(css`
    display: none;
  `)}
`;

export const IconInstagram = styled(IconInstagramComponent)``;

export const IconBurger = styled(IconBurgerComponent)`
  cursor: pointer;
`;

export const Header = styled.header`
  max-width: 1366px;

  ${Link} {
    margin-right: auto;
  }

  ${IconBurger} {
    margin-left: auto;
  }

  ${mobile(css`
    padding: 15px 18px;
    position: fixed;
    background-color: #fff;
    width: 100%;
  `)}

  ${desktop(css`
    padding: 51px 40px 0;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  `)}
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
