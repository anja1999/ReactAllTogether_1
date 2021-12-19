import React, { Component } from "react";

class CreateNewUser extends Component {
  
  state ={
    firstName: '',
    lastName : '',
    userName : '',
    validInput: true
  }
  
  addNewUser = event => {
    event.preventDefault();
    let validateUser = this.validateUser(this.state.userName);
    if(!validateUser){
       this.setState({ validInput: validateUser });  
       return;      
    }
    let user = {
      firstName:this.state.firstName,
      lastName : this.state.lastName,
      userName : this.state.userName,
      numOfGames : 0
    }
    this.setState({ validInput: validateUser });  
    this.props.addUser(user);
    this.clearDetails();
  }
  
  handleChangeFirstName = event => {
    event.preventDefault();
    this.setState({ firstName: event.target.value });
  };
  
  handleChangeLastName = event => {
    event.preventDefault();
    this.setState({ lastName: event.target.value });
  };
  
  handleChangeUserName = event => {
    event.preventDefault();
    this.setState({ userName: event.target.value });
  };
  
  validateUser =(userName)=>{    
    let existingUsers = this.props.users.filter(u => u.userName === userName);
    return existingUsers.length === 0;
  }
  
  detailsAreEmpty = ()=>{
    return this.state.firstName === '' || 
      this.state.lastName === '' ||
      this.state.userName === '';
  }
  
  clearDetails = ()=>{
    this.setState({ firstName : '', lastName:'', userName: '' });  
  }
  
  render(){
   
    return(
      <form onSubmit={this.addNewUser}>
      	<input
      		type='text'
      		placeholder ='Enter first name'
      		value = {this.state.firstName}
			onChange = {this.handleChangeFirstName}
		/>
		<input
      		type='text'
      		placeholder ='Enter last name'
      		value = {this.state.lastName}
			onChange = {this.handleChangeLastName}
		/>
		<input
      		type='text'
      		placeholder ='Enter user name'
      		value = {this.state.userName}
			onChange = {this.handleChangeUserName}
		/>
		<button disabled={this.detailsAreEmpty()}>Add</button>
		<p>{this.state.validInput ? "" : 'User with this  username is already exists'} </p>
      </form>
    )
  }
  
}
export default CreateNewUser;