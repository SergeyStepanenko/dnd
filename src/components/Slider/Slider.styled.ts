import styled from 'styled-components';

export const SliderWrapper = styled.div`
  [direction='prev'],
  [direction='next'] {
    svg {
      vertical-align: middle;
    }
  }
`;

export const ItemsWrapper = styled.div`
  padding: 0 18px;

  & > * + * {
    margin-top: 19px;
  }
`;
