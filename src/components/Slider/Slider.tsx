import React from 'react';
import { Slider as ScrollSnapSlider } from '@lifarl/react-scroll-snap-slider';
import { ITEMS } from '@/constants/sliderItems';
import * as S from './Slider.styled';
import SliderItem from './SliderItem';

const MOBILE_BREAKPOINT = 991;

const getIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

const Slider: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    if (isMobile === null) {
      setIsMobile(getIsMobile);
    }

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
