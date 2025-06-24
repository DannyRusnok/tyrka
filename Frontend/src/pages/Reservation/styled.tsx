import { styled } from '@linaria/react';
import 'react-calendar/dist/Calendar.css';

export const CalendarSection = styled.section`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  min-height: 420px;
  overflow-x: auto;
  padding-left: 0;
  padding-right: 0;
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .react-calendar {
    width: 100%;
    max-width: 900px;
    background: transparent;
    border: none;
    font-size: 1.2rem;
    box-shadow: 0 2px 16px #0001;
  }
`;

export const ReservationTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #111;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
  width: 100%;
  max-width: 900px;
  margin: 0 auto 1.2rem auto;
  text-align: center;
`;

export const ReservationForm = styled.form`
  width: 100%;
  max-width: 900px;
  margin: 2.5rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

export const ReservationInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1.1rem;
  font-family: inherit;
`;

export const ReservationButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s, opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: none;
  &:hover {
    background: #333;
  }
`;

export const PriceList = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 3rem auto 0 auto;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 16px #0001;
  padding: 2rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceListTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #222;
`;

export const PriceListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2rem;
  th,
  td {
    padding: 0.7rem 1rem;
  }
  th {
    color: #888;
    font-weight: 500;
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
  }
  td {
    color: #222;
    font-weight: 500;
    text-align: right;
    width: 50%;
    border-bottom: 1px solid #e0e0e0
  }
`;