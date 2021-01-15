import React from 'react';
import { Container } from './styled.js';

import DateEvent from './DateEvent';

export default () => {
  return(
    <div style={{margin: 'auto', width: '80%'}}>
      <Container>
        <h3>Upcoming Events</h3>
        <DateEvent />
      </Container>
    </div>
  );
}