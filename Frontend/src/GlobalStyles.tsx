import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const globalStyles = css`
  :global() {
    body {
      font-family: 'Segoe UI', 'Arial', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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