import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import { Container } from './styled';
import notFound from './lotties/notFound';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notFound,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Page = () => {
  return(
      <Container>
        <Lottie 
	        options={defaultOptions}
          height={300}
          width={300}
        />
        <Link to="/" style={{textDecoration: 'none'}}>
          <span>Voltar para a Home</span>
        </Link>
      </Container>
      
  );
};

export default Page;