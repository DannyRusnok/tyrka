import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const globalStyles = css`
  :global() {
    html {
      scroll-behavior: smooth;
    }
    body {
      font-family: 'Segoe UI', 'Arial', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    h2 {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
    }
  }
`;

export const StyledTitle = styled.h1`
  color: red;
`;

export const Layout = styled.div`
  display: grid;
  grid-template: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
`;