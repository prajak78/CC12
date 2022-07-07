import logo from './logo.svg';
import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Topic from './pages/Topic';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
      </Switch>
     </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn
    //     </a>
    //   </header>
    // </div>
  )
}

export default App;


