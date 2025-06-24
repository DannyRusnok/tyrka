import * as React from 'react';
import { MapSectionWrapper, MapSectionTitle, MapSectionMap } from './styled';
import { useInView } from '../../hooks/useInView';

export const MapSection: React.FC = () => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.2 });
  const [mapRef, mapInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <MapSectionWrapper>
      <MapSectionTitle ref={titleRef} className={titleInView ? 'show' : ''}>
        Kde nás najdete
      </MapSectionTitle>
      <MapSectionMap ref={mapRef} className={mapInView ? 'show' : ''}>
        <iframe src="https://mapy.com/s/nevoposaro" width="100%" height="600px" frameBorder={0} style={{ border: 0}} />
      </MapSectionMap>
    </MapSectionWrapper>
  );
};
