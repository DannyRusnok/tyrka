import { styled } from '@linaria/react';

export const FooterWrapper = styled.footer`
  background: linear-gradient(rgba(20, 20, 20, 0.68), rgba(20, 20, 20, 0.68)),
    url('/heroimage.png') center/cover no-repeat;
  padding: 4rem 0 2rem 0;
  width: 100%;
  backdrop-filter: blur(2px);
  color: #fff;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
  @media (min-width: 801px) {
    align-items: center;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: stretch;
  }
`;

export const FooterFormCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const FooterTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
  color: #fff;
`;

export const FooterTextarea = styled.textarea`
  width: 100%;
  min-width: 260px;
  max-width: 400px;
  min-height: 100px;
  font-size: 1.1rem;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  resize: vertical;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  &::placeholder {
    color: #eee;
  }
`;

export const FooterButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s,
    opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: none;
  &:hover {
    background: #333;
  }
`;

export const FooterInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
`;

export const FooterAddress = styled.a`
  font-size: 1.1rem;
  color: #fff;
  text-decoration: underline;
  word-break: break-word;
  &:hover {
    color: #aad2ff;
  }
`;

export const FooterSocialIcon = styled.a`
  display: inline-block;
  margin-right: 0.5rem;
  svg {
    display: block;
  }
`;

export const FooterDivider = styled.hr`
  border: none;
  border-top: 1.5px solid #e0e0e0;
  margin: 2.5rem 0 1.5rem 0;
  width: 100%;
`;

export const FooterBottom = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1rem;
  margin-top: 0.5rem;
`;
