import React from 'react';
import { 
  YoutubeArea,
  InstagramArea,
  EventArea,
  ContactArea,
  Container,
  Title,
  Button 
} from './styled';

import Carousel from '../../components/Carousel';
import ComingEvents from '../../components/ComingEvents';

const canal = 'https://www.youtube.com/watch?v=EQajlRqMTCM&ab_channel=UnimedCascavel';

export default () => {
  return(
    <>
      <YoutubeArea>
          <Container>
            <div className="videoArea">
              <div className="iframe">
                <iframe 
                  width="700" 
                  height="400" 
                  src="https://www.youtube.com/embed/EQajlRqMTCM" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
              <a href={canal} target="_blank">
                <Button>
                  <span>
                    Conferir Youtube
                  </span>
                </Button>
              </a>
            </div>
          </Container>
      </YoutubeArea>
      <EventArea>
        <Container>
          <Title color="#FFF">Eventos</Title>
          <div className="rowEvent">
            <div className="carouselArea">
              <Carousel />
            </div>
            <div className="eventsArea">
              <ComingEvents />

              {/*<Title color="#FFF" fontSize={15}>Nenhum evento próximo</Title>*/}

            </div>
          </div>
        </Container>
      </EventArea>
      <ContactArea>
        <Container>
          <div className="containerContact">
            <div className="textContact">
              <p style={{fontSize: '30px'}}>👋</p>
              <p>
                Precisando de ajuda para tirar uma ideia do papel ou outro 
                assunto que possa ajudar? Entre em contato!
              </p>
            </div>
            <div>
              <a href={canal} target="_blank">
                <Button>
                  <span>
                    Fale comigo
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </ContactArea>
      <InstagramArea>
        <Container>
          <Title color="#000">Follow me</Title>
          <div className="photos">
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe src="//lightwidget.com/widgets/951340c54f0551809dcfa79763c52933.html" 
              scrolling="no" 
              allowtransparency="true" 
              class="lightwidget-widget" 
            /> 
          </div>
        </Container>
      </InstagramArea> 
    </>   
  );
};
