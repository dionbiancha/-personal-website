import styled from 'styled-components';

export const YoutubeArea = styled.div`
  width: 100%;
  height: 550px;
  background-color: #000;

  .videoArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: 'Archivo Black', sans-serif;
  color: ${props=>props.color || '#FFF'};
  text-align: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  margin-top: 50px;
  border: 2px solid #FFF;
  color: #FFF;
  transition: all ease .4s;

  span {
    font-size: 24px;
    font-family: 'Archivo Black', sans-serif;
  }

  &:hover {
    background-color: #FFFFFF;
    color: #303030;
    transition: all ease .4s;
  }
`;

export const InstagramArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #FFF;

  .photos {

    iframe {
      width: 680px;
      border:0;
      overflow: hidden;
    }
  }

`;