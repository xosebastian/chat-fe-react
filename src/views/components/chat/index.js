import React, {useEffect, useRef, useState} from 'react';
import  {  Container }  from './styled';
import {  Row, Col } from 'react-grid';
import { socket } from '../../../core/socket.config';

import  RoomTitle  from './components/roomTitle';
import  TextBox  from './components/textBox';

function Chat({height}) {

    const textBoxRef = useRef(null);
    const roomTitleRef = useRef(null);
 
   

    const [  textBoxHeight, setTextBoxHeigh] = useState(0)
    const [  roomTitleHeight, setRoomTitleHeigh] = useState(0)
    const [ messages , setMessages ] = useState([])


    useEffect(() => {
      setTextBoxHeigh(textBoxRef.current.clientHeight);
      setRoomTitleHeigh(roomTitleRef.current.clientHeight);




      socket.on('reciveMessage', (messageFromSocket)=>{

        let stateMessages = messages;
        
        stateMessages.push(messageFromSocket)

    
    
        setMessages([...messages, stateMessages]);
    })




    }, []);
  
    console.log(messages);

  return (
    <Container fluid style={{height: height }}>
        
        <Row>
                <RoomTitle ref={roomTitleRef} sm={12} md={12}></RoomTitle> 
                <Col  sm={12} md={12}  style={{overflowY:'scroll', paddingTop:'20px', height: height - (textBoxHeight + roomTitleHeight) }}>
            

                    {  messages && messages.map(item =>
                        ((item.user && item.message) &&
                            <div>
                                {item.user} : {item.message}
                            </div>
                        )
                    )}
                </Col>
        

            <TextBox ref={textBoxRef}></TextBox>
               
        </Row>
  </Container>
  );
}

export default Chat;
