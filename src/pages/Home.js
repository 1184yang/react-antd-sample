import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
import Container from '../components/Container';

const Home = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  return (
    <Container>
      <h1>Hello Tainan, 台南! Website</h1>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </Container>
  )
}

export default Home;