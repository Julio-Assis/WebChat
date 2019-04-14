import {
  BrowserRouter as Router,
  Route, 
  Link  
} from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatWindow from './containers/ChatWindow';

import './App.css';
import 'antd/dist/antd.css'; 

const Index = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About blahblah</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

class App extends Component {
  render() {
    return (

      <Router>
        <Link to='/'> Home </Link>
        <Link to='/about/'> About </Link>
        <Link to='/users/'> Users </Link>
        <Link to='/chatWindow/'> ChatWindow </Link>

        <Route path='/' exact component={Index}/>
        <Route path='/about/' component={About}/>
        <Route path='/users/' component={Users}/>
        <Route path='/chatWindow/' component={ChatWindow} />

      </Router>
     
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export default App;
