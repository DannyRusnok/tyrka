import * as React from 'react';
import { NavigationContacts, NavigationContainer, NavigationLink, NavigationLinks, NavigationTitle } from './styled';
import { NavigationContact } from '../NavigationContact';

export const Navigation: React.FC = () => {
    return <NavigationContainer>
        <NavigationLinks>
            <NavigationLink to="/">Domů</NavigationLink>
            <NavigationLink to="/rezervace">Rezervace</NavigationLink>
        </NavigationLinks>
        <NavigationTitle>Chata Tyrka</NavigationTitle>
        <NavigationContacts>
            <NavigationContact iconSrc='/mail.svg' iconAlt='e-mail' href='mailto:tyrka@gmail.com' label='tyrka@gmail.com' />
            <NavigationContact iconSrc='/phone.svg' iconAlt='telefon' href='tel:+420123456789' label='+420 123 456 789' />
        </NavigationContacts>
    </NavigationContainer>;
}