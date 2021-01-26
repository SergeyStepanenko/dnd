import React from 'react';
import { Slider as ScrollSnapSlider } from '@lifarl/react-scroll-snap-slider';
import * as S from './Slider.styled';
import { ITEMS } from './Slider.constants';
import SliderItem from './SliderItem';

const MOBILE_BREAKPOINT = 991;

const Slider: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < MOBILE_BREAKPOINT,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const SliderOrDiv = isMobile ? S.ItemsWrapper : ScrollSnapSlider;

  return (
    <S.SliderWrapper>
      <SliderOrDiv {...(!isMobile && { slideWidth: 527 })}>
        {ITEMS.map((item, index) => (
          <SliderItem key={index} {...item} />
        ))}
      </SliderOrDiv>
    </S.SliderWrapper>
  );
};

export default Slider;
