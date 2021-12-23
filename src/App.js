import './App.css';
import Navigation from './componenets/Navigation';
import React from 'react'

import News from './componenets/News';

function App() {
  return (
    <>
      <Navigation title="News Buzz"/>
      <News pageSize="11"/>
    </>
  );
}

export default App;

/**import React, { Component } from 'react'
import News from './componenets/News';

export default class App extends Component {
  render() {
    return (
    <div>
      <Navigation title="News Buzz"/>
      <News/>
    </div>
    )
  }
}
*/