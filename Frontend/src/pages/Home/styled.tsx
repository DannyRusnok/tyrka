import { styled } from '@linaria/react';

// Tento soubor už neobsahuje styly pro Hero, ty jsou nyní ve složce components/Hero/styled.tsx

export const AdditionalContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
`;

export const AdditionalContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdditionalImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  margin-bottom: 1.5rem;
`;

export const AdditionalText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;