import { styled } from '@linaria/react';

export const MapSectionWrapper = styled.section`
  width: 100%;
  margin: 3rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapSectionTitle = styled.h2`
  margin: 4rem 0;
  font-size: 4rem;
  font-weight: 400;
  text-align: center;
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

export const MapSectionMap = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px #0002;
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

export const MapSectionAddress = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin: 0 0 2rem 0;
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
