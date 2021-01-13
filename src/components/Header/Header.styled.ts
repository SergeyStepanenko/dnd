import styled from 'styled-components';
import { Typography } from '@/styled';

export const Title = styled(Typography)`
  line-height: 1.7;

  @media only screen and (min-width: 990px) {
    line-height: 1.2;
  }
`;

export const Description = styled(Typography)`
  margin-top: 23px;
  font-size: 13px;

  @media only screen and (min-width: 990px) {
    margin-top: 9px;
    font-size: 17px;
  }
`;

export const Header = styled.header`
  @media only screen and (min-width: 990px) {
    padding-top: 51px;
    text-align: center;
  }
`;
