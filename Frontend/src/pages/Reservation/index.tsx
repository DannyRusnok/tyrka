import * as React from 'react';
import { Footer } from '../../components/Footer';
import Calendar from 'react-calendar';
import { CalendarSection, CalendarWrapper, ReservationTitle, ReservationForm, ReservationInput, ReservationButton, PriceList, PriceListTitle, PriceListTable } from './styled';
import { ReservationDivider } from './Divider';

export const Reservation: React.FC = () => {
    return (
      <>
        <ReservationDivider />
        <CalendarSection>
          <ReservationTitle className="show">Nezávazná rezervace</ReservationTitle>
          <CalendarWrapper>
            <Calendar
              selectRange={true}
              showDoubleView={true}
              locale="cs-CZ"
              calendarType="iso8601"
              prev2Label={null}
              next2Label={null}
            />
          </CalendarWrapper>
          <ReservationForm>
            <ReservationInput type="text" name="jmeno" placeholder="Jméno" required />
            <ReservationInput type="text" name="prijmeni" placeholder="Příjmení" required />
            <ReservationInput type="email" name="email" placeholder="E-mail" required />
            <ReservationInput type="tel" name="telefon" placeholder="Telefon" required />
            <ReservationButton type="submit">Odeslat rezervaci</ReservationButton>
          </ReservationForm>
          <PriceList>
            <PriceListTitle>Ceník</PriceListTitle>
            <PriceListTable>
              <tbody>
                <tr>
                  <th>1 noc</th>
                  <td>500,- Kč</td>
                </tr>
                <tr>
                  <th>7 nocí</th>
                  <td>5 000,- Kč</td>
                </tr>
                <tr>
                  <th>14 nocí</th>
                  <td>8 500,- Kč</td>
                </tr>
              </tbody>
            </PriceListTable>
          </PriceList>
        </CalendarSection>
        <Footer />
      </>
    );
}