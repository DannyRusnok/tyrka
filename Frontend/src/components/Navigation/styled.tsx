import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
    margin: 1rem 0;
`;

export const NavigationLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 2rem;
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

export const NavigationTitle = styled.h1`
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 1px;
`;