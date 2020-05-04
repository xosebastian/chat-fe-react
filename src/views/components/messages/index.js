import React from 'react';
import {ContainerMessage, MessageBox, MessageUsername} from './styled';



function Message(props) {

    const {message, color, username} = props;
    // const username = localStorage.getItem('username');
 
  return (


    <ContainerMessage>
      <MessageUsername color={color}>
        {username}
        :
      </MessageUsername>
      <MessageBox>
        {message}
      </MessageBox> 
    </ContainerMessage>


  );
}

export default Message;
