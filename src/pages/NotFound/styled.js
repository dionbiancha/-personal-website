import styled from 'styled-components';

export const Container = styled.div`
    height: 550px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    span {
      font-size: 18px;
      font-family: 'Archivo Black', sans-serif;
      transition: all ease .4s;
      text-decoration: none;
      color: #3F3F3F;

      &:hover {
        color: #7B84DB;
        transition: all ease .4s;
      }
    }
`;