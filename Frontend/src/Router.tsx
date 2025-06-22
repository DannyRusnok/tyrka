import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledTitle } from './styled';
import { Home } from './pages/Home';

export const Router: React.FC = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<StyledTitle>About</StyledTitle>} />
  </Routes>;
};