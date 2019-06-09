import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatWindow from './containers/ChatWindow';
import { Layout, Menu } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

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
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/'> Home </Link></Menu.Item>
            <Menu.Item key="2"><Link to='/about/'> About </Link></Menu.Item>
            <Menu.Item key="3"><Link to='/users/'> Users </Link></Menu.Item>
            <Menu.Item key='4'><Link to='/chatWindow/'> ChatWindow </Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: "5px"}}>
          <Route path='/' exact component={Index} />
          <Route path='/about/' component={About} />
          <Route path='/users/' component={Users} />
          <Route path='/chatWindow/' component={ChatWindow} />
        </Content>
      </Router>

    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export default App;
