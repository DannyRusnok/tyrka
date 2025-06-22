import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavigationContacts, NavigationContainer, NavigationLinks } from './styled';

export const Navigation: React.FC = () => {
    return <NavigationContainer>
        <NavigationLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </NavigationLinks>
        <h1>Tyrka</h1>
        <NavigationContacts>
            <label>tyrka@gmail.com</label>
            <label>+420 123 456 789</label>
        </NavigationContacts>
    </NavigationContainer>;
}