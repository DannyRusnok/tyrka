import * as React from 'react';
import { AdditionalContentWrapper, AdditionalContentCenter, AdditionalImage, AdditionalText, AdditionalTitle } from './styled';
import { useInView } from './useInView';

export interface AdditionalInfoProps {
  scrollToRef: React.RefObject<HTMLDivElement>;
}

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ scrollToRef }) => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.2 });
  const [img1Ref, img1InView] = useInView<HTMLImageElement>({ threshold: 0.2 });
  const [img2Ref, img2InView] = useInView<HTMLImageElement>({ threshold: 0.2 });
  const [img3Ref, img3InView] = useInView<HTMLImageElement>({ threshold: 0.2 });
  const [text1Ref, text1InView] = useInView<HTMLParagraphElement>({ threshold: 0.2 });
  const [text2Ref, text2InView] = useInView<HTMLParagraphElement>({ threshold: 0.2 });
  const [text3Ref, text3InView] = useInView<HTMLParagraphElement>({ threshold: 0.2 });

  return (
    <>
      <AdditionalTitle ref={titleRef} className={titleInView ? 'show' : ''}>
        Proč si vybrat Chatu Tyrka?
      </AdditionalTitle>
      <AdditionalContentWrapper ref={scrollToRef}>
        <AdditionalContentCenter>
          <AdditionalImage ref={img1Ref} className={img1InView ? 'show' : ''} src="/heroimage.png" alt="Chata Tyrka" />
          <AdditionalText ref={text1Ref} className={text1InView ? 'show' : ''}>
            Chata Tyrka je ideální místo pro vaši dovolenou v přírodě. Užijte si klid, pohodlí a krásné okolí Beskyd.
          </AdditionalText>
        </AdditionalContentCenter>
        <AdditionalContentCenter>
          <AdditionalImage ref={img2Ref} className={img2InView ? 'show' : ''} src="/heroimage.png" alt="Chata Tyrka" />
          <AdditionalText ref={text2Ref} className={text2InView ? 'show' : ''}>
            Komfortní ubytování a moderní vybavení pro celou rodinu i přátele.
          </AdditionalText>
        </AdditionalContentCenter>
        <AdditionalContentCenter>
          <AdditionalImage ref={img3Ref} className={img3InView ? 'show' : ''} src="/heroimage.png" alt="Chata Tyrka" />
          <AdditionalText ref={text3Ref} className={text3InView ? 'show' : ''}>
            Skvělá poloha pro turistiku, cyklistiku i zimní sporty v srdci Beskyd.
          </AdditionalText>
        </AdditionalContentCenter>
      </AdditionalContentWrapper>
    </>
  );
};
