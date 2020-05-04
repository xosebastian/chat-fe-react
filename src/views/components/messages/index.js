import React from 'react';
import {ContainerMessage, MessageBox, MessageUsername} from './styled';



function Message(props) {

    const {message, user} = props;
    //const username = localStorage.getItem('username');
 
  return (


    <ContainerMessage>
      <MessageUsername>
        username
      </MessageUsername>
      <MessageBox username={user}>
        {message}
      </MessageBox> 
    </ContainerMessage>


  );
}

export default Message;
