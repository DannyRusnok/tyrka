import * as React from 'react';
import { HeroWrapper, HeroImage, HeroOverlay, HeroButton, HeroOverlayText } from './styled';
import { useInView } from '../../hooks/useInView';

export const Hero: React.FC = () => {
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
        >
          Prozkoumat
        </HeroButton>
      </HeroOverlay>
    </HeroWrapper>
  );
};
