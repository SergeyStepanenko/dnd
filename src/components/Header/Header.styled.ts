import styled from 'styled-components';
import { Typography } from '@/styled';

export const Title = styled(Typography)`
  line-height: 1.7;

  @media only screen and (min-width: 991px) {
    line-height: 1.2;
  }
`;

export const Description = styled(Typography)`
  margin-top: 23px;
  font-size: 13px;

  @media only screen and (min-width: 991px) {
    margin-top: 9px;
    font-size: 17px;
  }
`;

export const Header = styled.header`
  @media only screen and (max-width: 990px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  @media only screen and (min-width: 991px) {
    padding-top: 51px;
    text-align: center;
  }
`;
