import React, { Component } from 'react';
// import './App.css';
import CollaboWrite from './CollaboWrite'
import RiseUp from './RiseUp'
import SpaceShopper from './SpaceShopper'
import Caption from './Caption'

import { Screen, ScreenSlice } from 'react-screen';
import styles from '../node_modules/react-screen/dist/react-screen.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <h4>From most recent to the oldest</h4>
        <div>
          <Screen sliceHeight={ 100 } delay={ 250 } showSkip={ true }>
            <ScreenSlice>
              <CollaboWrite />
            </ScreenSlice>
            <ScreenSlice>
              <RiseUp />
            </ScreenSlice>
            <ScreenSlice>
              <SpaceShopper />
            </ScreenSlice>
          </Screen>
        </div>
      </div>
    );
  }
}

export default App;
