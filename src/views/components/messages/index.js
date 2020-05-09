import React from 'react';
import {ContainerMessage, MessageBox,MessageText,MessageDate, MessageUsername} from './styled';



function Message(props) {

    const {message, color, username} = props;
    // const username = localStorage.getItem('username');
 
  return (


    <ContainerMessage>
      <MessageBox>
        <MessageUsername color={color}>
          {username}
        </MessageUsername>
        <MessageText>
          {message}
        </MessageText>
        <MessageDate>
          02:19
        </MessageDate>
      </MessageBox> 
    </ContainerMessage>


  );
}

export default Message;
