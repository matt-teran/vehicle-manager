import React from 'react';
import './App.css';

import Aux from './hoc/Aux/Aux';
import Header from './components/Header/Header';
import VehicleManager from './containers/VehicleManager/VehicleManager';

function App() {
  return (
    <Aux>
      <Header/>
      <VehicleManager/>
    </Aux>
  );
}

export default App;
