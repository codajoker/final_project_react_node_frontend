import moment from 'moment';
import { Fragment, useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { IconContext } from 'react-icons';
import { RiCalendar2Line } from 'react-icons/ri';
import DiaryProductForm from '../../components/DairyProductForm/DairyProductForm';
import { Container } from '../../Container.styled';
import { CalendarWrap, CalendarTitle } from './DiaryPage.styled';

import Header from '../../components/Header/Header';

export default function DiaryPage() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const formatedDate = moment(date).format('DD.MM.yyyy');

  return (
    <Fragment>
      <Header />
      <Container>
        <CalendarWrap>
          <CalendarTitle>{formatedDate}</CalendarTitle>
          <Datetime
            open={open}
            value={date}
            renderInput={() => (
              <IconContext.Provider
                value={{
                  style: {
                    color: '#9B9FAA',
                    width: '18px',
                    height: '20px',
                    verticalAlign: 'middle',
                  },
                }}
              >
                <RiCalendar2Line
                  onClick={() => setOpen(!open)}
                  color="#9B9FAA"
                />
              </IconContext.Provider>
            )}
            timeFormat={false}
            onChange={momentObj => {
              setDate(momentObj.toDate());
              setOpen(false);
            }}
          />
        </CalendarWrap>
        <div>
          <DiaryProductForm />
        </div>
      </Container>
    </Fragment>
  );
}
