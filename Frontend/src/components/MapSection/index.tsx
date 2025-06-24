import * as React from 'react';
import { MapSectionWrapper, MapSectionTitle, MapSectionMap, MapSectionAddress } from './styled';
import { useInView } from '../../hooks/useInView';

export const MapSection: React.FC = () => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.2 });
  const [addressRef, addressInView] = useInView<HTMLParagraphElement>({ threshold: 0.2 });
  const [mapRef, mapInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <MapSectionWrapper>
      <MapSectionTitle ref={titleRef} className={titleInView ? 'show' : ''}>
        Kde nás najdete?
      </MapSectionTitle>
      <MapSectionAddress ref={addressRef} className={addressInView ? 'show' : ''}>
        Oldřichovice Vodojem, 73961 Třinec - Oldřichovice, Česko
      </MapSectionAddress>
      <MapSectionMap ref={mapRef} className={mapInView ? 'show' : ''}>
        <iframe
          src="https://mapy.com/s/nevoposaro"
          width="100%"
          height="600px"
          frameBorder={0}
          style={{ border: 0, pointerEvents: 'auto' }}
          tabIndex={-1}
          title="Mapa Chata Tyrka"
        />
      </MapSectionMap>
    </MapSectionWrapper>
  );
};
