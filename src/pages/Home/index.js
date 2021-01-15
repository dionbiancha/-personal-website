import React from 'react';
import { 
  YoutubeArea,
  InstagramArea,
  Container,
  Title,
  Button 
} from './styled';

const canal = 'https://www.youtube.com/watch?v=EQajlRqMTCM&ab_channel=UnimedCascavel';

export default () => {
  return(
    <>
      <YoutubeArea>
          <Container>
            <div className="videoArea">
              <iframe 
                width="700" 
                height="400" 
                src="https://www.youtube.com/embed/EQajlRqMTCM" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
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
      <InstagramArea>
        <Container>
          <div>
            <Title color="#000">Follow me</Title>
          </div>
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
