import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 20px;
  
  span {
    color: #5885A8;
    margin: 0;
    
  }
`;
const Description = styled.h4`
  color: #161616;
  margin: auto;
`;

const infoEvent = [
  {
    //day: 8, 
    //month: 'MAR', 
    //description: 'Chimelong International Forum on Tourism Developmen'
  }
];

export default () => {
  return(
    <>
      {infoEvent.map((i)=> 
        <Container>
          <Date>
          <span style={{fontSize: '10px', fontWeight: 'bold'}}>{i.month}</span>
          <span style={{fontSize: '25px', fontWeight: 'bold'}}>{i.day}</span>
          </Date>
          <Description>
            {i.description}
          </Description>
        </Container>
      )}
    </>
  );
}