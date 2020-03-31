import React, {useEffect, useRef, useState} from 'react';
import  {  Container }  from './styled';
import {  Row, Col } from 'react-grid';

import  RoomTitle  from './components/roomTitle';
import  TextBox  from './components/textBox';


function Chat({height}) {

    const textBoxRef = useRef(null);
    const roomTitleRef = useRef(null);

    const [  textBoxHeight, setTextBoxHeigh] = useState(0)
    const [  roomTitleHeight, setRoomTitleHeigh] = useState(0)

    useEffect(() => {
      setTextBoxHeigh(textBoxRef.current.clientHeight);
      setRoomTitleHeigh(roomTitleRef.current.clientHeight);
    }, []);
  

    console.log(roomTitleHeight);
  return (
    <Container fluid style={{height: height }}>
        <Row>
                <RoomTitle ref={roomTitleRef} sm={12} md={12}></RoomTitle> 
                <Col  sm={12} md={12}  style={{overflowY:'scroll', paddingTop:'20px', height: height - (textBoxHeight + roomTitleHeight) }}>
                    <div>[Sebastian]: Hola!</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>    
                </Col>
        

            <TextBox ref={textBoxRef}></TextBox>
               
        </Row>
  </Container>
  );
}

export default Chat;
