import styled from 'styled-components';

export const HeaderArea = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px;
  background-color: #000;

  .container {
    max-width: 1000px;
    display: flex;
    margin: auto;

    .logo {
      display: flex;
      justify-content: flex-end;
      flex: 1;  

      img {
        width: 50px;
        height: 50px;

      }
    }
    .menu {
      flex: 1;
    }
  }
`;