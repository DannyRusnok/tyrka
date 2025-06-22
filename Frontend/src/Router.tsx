import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledTitle } from './styled';

export const Router: React.FC = () => {
  return <Routes>
    <Route path="/" element={<StyledTitle>Home</StyledTitle>} />
    <Route path="/about" element={<StyledTitle>About</StyledTitle>} />
  </Routes>;
};