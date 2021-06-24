import React from 'react'
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About'
import Store from './components/pages/Store'
import Gmail from './components/pages/Gmail'
import Images from './components/pages/Images'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GlobalStyle from './components/style/globalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/store' component={Store} />
          <Route exact path='/gmail' component={Gmail} />
          <Route exact path='/images' component={Images} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
