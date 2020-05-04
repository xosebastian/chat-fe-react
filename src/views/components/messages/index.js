import React from 'react';
import {ContainerMessage, MessageBox, MessageUsername} from './styled';



function Message(props) {

    const {message, color} = props;
    //const username = localStorage.getItem('username');
 
  return (


    <ContainerMessage>
      <MessageUsername color={color}>
        ANON
      </MessageUsername>
      <MessageBox>
        {message}
      </MessageBox> 
    </ContainerMessage>


  );
}

export default Message;
