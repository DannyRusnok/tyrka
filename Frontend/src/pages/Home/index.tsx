import * as React from 'react';
import { Hero } from '../../components/Hero';
import { AdditionalInfo } from '../../components/AdditionalInfo';
import { MapSection } from '../../components/MapSection';
import { Footer } from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <>
        <Hero />
        <AdditionalInfo />
        <MapSection />
        <Footer />
        </>
    );
}