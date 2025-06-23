import * as React from 'react';
import { IconImg, StyledLink } from './styled';

interface NavigationContactProps {
    iconSrc: string;
    iconAlt: string;
    label: string;
    href: string;
}

export const NavigationContact: React.FC<NavigationContactProps> = ({ href, iconAlt, iconSrc, label }) => {
    return <StyledLink href={href}>
        <IconImg src={iconSrc} alt={iconAlt} />
        <label>{label}</label>
    </StyledLink>;
}