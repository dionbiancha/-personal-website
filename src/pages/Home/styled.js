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

    .iframe {
      margin-bottom: 40px;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const Title = styled.h3`
  font-size: ${props=>props.fontSize || 24}px;
  font-family: 'Archivo Black', sans-serif;
  color: ${props=>props.color || '#FFF'};
  text-align: center;
  margin: 50px
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 250px;
  height: 50px;
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
  height: 350px;
  background-color: #FFF;

  .photos {
    padding-bottom: 40px;

    iframe {
      width: 680px;
      border:0;
      overflow: hidden;
    }
  }
`;

export const EventArea = styled.div`
  width: 100%;
  height: 700px;
  background-color: #161616;

  .rowEvent {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #FFF;
    padding: 30px;

    .carouselArea {
      width: 50%;
    }
    .eventsArea {
      width: 50%;
    }
  }
`;

export const ContactArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #000;

  .containerContact {
    flex-direction: column;
    height: 280px;

    .textContact {
      width: 80%;
      margin: auto;
    }

    a {
      text-decoration: none;;
    }
  
    p {
      color: #919191;
      font-size: 20px;
      margin-bottom: 40px;
      text-align: center;
    }
  }
`;