import React from 'react';
import { createSetUserAction } from '../../redux/modules/userModule';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';


const Users = (props) => {

  const setUserName = (userName) => (event) => {
    props.setUserName(userName);
  }

  return (
    <div style={{height: "100%"}}>
      <h2>Time to choose your user big fella</h2>

      <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', maxWidth: 'max-content', height: "80%"}}>
        <Button onClick={setUserName('Josh')}>
          Josh
        </Button>

        <Button onClick={setUserName('Bob')}>
          Bob
        </Button>

        <Button onClick={setUserName('John')}>
          John
        </Button>

        <Button onClick={setUserName('Ashton')}>
          Ashton
        </Button>
      </div>
      
    </div>
  )
}

Users.propTypes = {
  setUserName: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => (dispatch(createSetUserAction(userName)))
  }
}


export default connect(null, mapDispatchToProps)(Users);