import { styled } from "@linaria/react";

export const IconImg = styled.img`
    width: 24px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
    filter: invert(1);
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;

    label:hover {
        cursor: pointer;
    }
`;