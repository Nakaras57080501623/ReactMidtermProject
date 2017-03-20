import React, { Component } from 'react';
import './App.css';

import './style_Home.css';
import './style_Home_Text.css';
import './style_Time.css';
import './style.css';
import {Home} from './Home';

export class App extends Component {
  state = {currentScene:"App"}

  OnChangeScene = (scene)=>
  {
    this.setState({currentScene:scene});
  }
  render() {

    return (
    <Home />
    );
  }
}

export default App;

