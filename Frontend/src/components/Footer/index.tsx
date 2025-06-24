import * as React from 'react';
import { FooterWrapper, FooterContent, FooterFormCol, FooterInfoCol, FooterTitle, FooterTextarea, FooterButton, FooterContacts, FooterDivider, FooterBottom, FooterAddress, FooterSocialIcon } from './styled.tsx';
import { NavigationContact } from '../NavigationContact';

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterFormCol>
          <FooterTitle>Máte dotaz?</FooterTitle>
          <FooterTextarea placeholder="Napište svůj dotaz..." rows={5} />
          <FooterButton>Odeslat</FooterButton>
        </FooterFormCol>
        <FooterInfoCol>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
            <FooterSocialIcon href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#fff"/>
                <path d="M21.333 16.001h-3.2v8h-3.2v-8h-1.6v-2.667h1.6v-1.6c0-2.133 1.067-3.2 3.2-3.2h2.133v2.667h-1.333c-0.533 0-0.8 0.267-0.8 0.8v1.333h2.133l-0.267 2.667z" fill="#000"/>
              </svg>
            </FooterSocialIcon>
          </div>
          <FooterContacts>
            <NavigationContact iconSrc='/mail.svg' iconAlt='e-mail' href='mailto:tyrka@gmail.com' label='tyrka@gmail.com' />
            <NavigationContact iconSrc='/phone.svg' iconAlt='telefon' href='tel:+420123456789' label='+420 123 456 789' />
          </FooterContacts>
          <FooterAddress as="a" href="https://mapy.com/s/gasejenetu" target="_blank" rel="noopener noreferrer">
            Oldřichovice Vodojem, 73961 Třinec - Oldřichovice, Česko
          </FooterAddress>
        </FooterInfoCol>
      </FooterContent>
      <FooterDivider />
      <FooterBottom>
        Powered by Hephara, 2025
      </FooterBottom>
    </FooterWrapper>
  );
};
