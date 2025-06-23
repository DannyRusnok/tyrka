import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
`;

export const NavigationLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const NavigationContacts = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const NavigationLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: inherit;
`;