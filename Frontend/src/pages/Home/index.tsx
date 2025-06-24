import * as React from 'react';
import { Hero } from '../../components/Hero';
import { AdditionalInfo } from '../../components/AdditionalInfo';
import { MapSection } from '../../components/MapSection';

export const Home: React.FC = () => {
    const additionalContentRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    return (
        <>
        <Hero scrollToRef={additionalContentRef} />
        <AdditionalInfo scrollToRef={additionalContentRef as React.RefObject<HTMLDivElement>} />
        <MapSection />
        </>
    );
}