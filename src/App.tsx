import React from 'react';
import Backdrop from './components/Backdrop';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Backdrop opacity={0.8} color="blue">
        <p>Hello With Background!</p>
      </Backdrop>
      <Backdrop>
        <p>Hello Without Background!</p>
      </Backdrop>
      <GlobalStyle />
    </>
  );
};

export default App;
