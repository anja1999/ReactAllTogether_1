import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component{
  constructor(props){  
  super(props);    
  this.state = {
      showPlayedGames:true ,
      buttonDesc: 'Hide played games'
    }
  }
  
  static propTypes = {
        users : PropTypes.array.isRequired
    };
  
  updateState = event=>{
    this.setState(currentState => ({
      showPlayedGames : !currentState.showPlayedGames,
      buttonDesc : !currentState.showPlayedGames? 'Hide played games' : 'Show played games'
    }));
  }
  
  render(){
    const {users} = this.props;
    const showNumber = this.state.showPlayedGames;
 
    return (
      <div>     
      	<p>Users</p>     
      	<button onClick={this.updateState}>{this.state.buttonDesc}</button>            	
	  	<ol>{
          users.map((user)=>(
          <User userName={user.userName} numOfGames={showNumber ? user.numOfGames : '\*'}/>
        ))}
		</ol>
      </div>
    )
  }
}

export default UserList;