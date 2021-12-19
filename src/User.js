import React from 'react';

const User = props => {
 	return(
      <li>{props.userName} played {props.numOfGames} games
      </li>
    )
}

export default User;