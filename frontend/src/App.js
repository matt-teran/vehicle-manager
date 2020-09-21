import React from 'react';
import './App.css';

import Aux from './hoc/Aux/Aux';
import VehicleManager from './containers/VehicleManager/VehicleManager';

function App() {
  return (
    <Aux>
      <VehicleManager/>
    </Aux>
  );
}

export default App;
