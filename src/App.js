import './App.css';
import Navigation from './componenets/Navigation';
import News from './componenets/News';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//title="News Buzz"

function App() {
  return (
    <>
      <Router>
        <Navigation/>

          <Routes>
            <Route path="/" element={<News pageSize="11" category="general"/>} />
            <Route path="/business" element={<News pageSize="11" category="business"/>} />
            <Route path="/entertainment" element={<News pageSize="11" category="entertainment"/>} />
            <Route path="/general" element={<News pageSize="11" category="general"/>} />
            <Route path="/health" element={<News pageSize="11" category="health"/>} />
            <Route path="/science" element={<News pageSize="11" category="science"/>} />
            <Route path="/sports" element={<News pageSize="11" category="sports"/>} />
            <Route path="/technology" element={<News pageSize="11" category="technology"/>} />
          </Routes>
      </Router>
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