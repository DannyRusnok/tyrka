import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Reservation } from './pages/Reservation';

export const Router: React.FC = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rezervace" element={<Reservation />} />
  </Routes>;
};