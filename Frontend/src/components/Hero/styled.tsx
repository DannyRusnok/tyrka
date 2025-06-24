import { styled } from '@linaria/react';

export const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeroImage = styled.div`
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
`;

export const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.7);
`;

export const HeroButton = styled.a`
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    background: #000;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 3;
    opacity: 0;
    transform: translateY(40px);
    &.show {
        opacity: 1;
        transform: translateY(0);
    }
    &:hover {
        background: #333;
    }
`;

export const HeroOverlayText = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    &.show {
        opacity: 1;
        transform: translateY(0);
    }
`;
