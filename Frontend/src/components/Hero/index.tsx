import * as React from 'react';
import { HeroWrapper, HeroImage, HeroOverlay, HeroButton, HeroOverlayText } from './styled';
import { useInView } from '../../hooks/useInView';

interface HeroProps {
  scrollToRef?: React.RefObject<HTMLDivElement>;
}

export const Hero: React.FC<HeroProps> = ({ scrollToRef }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [textRef, textInView] = useInView<HTMLHeadingElement>({ threshold: 0.2 });
  const [buttonRef, buttonInView] = useInView<HTMLAnchorElement>({ threshold: 0.2 });

  return (
    <HeroWrapper>
      <HeroImage style={{ backgroundImage: 'url(/heroimage.png)' }} />
      <HeroOverlay>
        <HeroOverlayText ref={textRef} className={textInView ? 'show' : ''}>
          Prozkoumejte naši chatu k pronájmu.
        </HeroOverlayText>
        <HeroButton
          ref={buttonRef}
          className={buttonInView ? 'show' : ''}
          href="#additional-content"
          onClick={handleClick}
        >
          Prozkoumat
        </HeroButton>
      </HeroOverlay>
    </HeroWrapper>
  );
};
