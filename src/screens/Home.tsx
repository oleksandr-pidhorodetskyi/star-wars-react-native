import React from 'react';
import Header from '../components/screenComponents/Home/Header.tsx';
import ContentContainer from '../components/screenComponents/Home/ContentContainer.tsx';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';

const Home = () => {
  return (
    <ScreenContainer>
      <Header />
      <ContentContainer />
    </ScreenContainer>
  );
};

export default Home;
