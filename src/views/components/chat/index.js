import React, {useEffect, useRef, useState} from 'react';
import  {  Container }  from './styled';
import {  Row, Col } from 'react-grid';
import { socket } from '../../../core/socket.config';
import getMessage from '../../hooks/getMessage';
import MessageList from '../messagesList';

import  RoomTitle  from './components/roomTitle';
import  TextBox  from './components/textBox';

function Chat({height, color}) {
    
    let messages = getMessage();
    const textBoxRef = useRef(null);
    const roomTitleRef = useRef(null);


    const [  textBoxHeight, setTextBoxHeigh] = useState(0)
    const [  roomTitleHeight, setRoomTitleHeigh] = useState(0)

    useEffect(() => {

      setTextBoxHeigh(textBoxRef.current.clientHeight);
      setRoomTitleHeigh(roomTitleRef.current.clientHeight);

    }, []);





  return (
    <Container fluid style={{height: height }}>
        
        <Row>
                <RoomTitle ref={roomTitleRef} sm={12} md={12}></RoomTitle> 




                <MessageList messages={messages} height={height - (textBoxHeight + roomTitleHeight)}> </MessageList>



            <TextBox ref={textBoxRef} color={color}></TextBox>
               
        </Row>
  </Container>
  );
}

export default Chat;
