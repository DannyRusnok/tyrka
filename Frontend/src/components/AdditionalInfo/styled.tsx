import { styled } from '@linaria/react';

export const AdditionalContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const AdditionalContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdditionalImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 1.6s cubic-bezier(0.23, 1, 0.32, 1),
    transform 1.6s cubic-bezier(0.23, 1, 0.32, 1);

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AdditionalText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 1.6s cubic-bezier(0.23, 1, 0.32, 1),
    transform 1.6s cubic-bezier(0.23, 1, 0.32, 1);

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AdditionalTitle = styled.h2`
  text-align: center;
  margin: 4rem 0;
  font-size: 4rem;
  font-weight: 400;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 1.6s cubic-bezier(0.23, 1, 0.32, 1),
    transform 1.6s cubic-bezier(0.23, 1, 0.32, 1);

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
