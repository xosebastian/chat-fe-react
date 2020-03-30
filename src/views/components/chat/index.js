import React from 'react';
import  {  Container, Button }  from './styled';
import {  Row, Col } from 'react-grid';
import Input from '../Input';
import  RoomTitle  from './components/room/title';
import { IoMdSend, IoIosLink  } from "react-icons/io";

function Chat({height}) {

  return (
    <Container fluid>
        <Row>
                <RoomTitle sm={12} md={12}>
                   
                </RoomTitle>
                <Col  sm={12} md={12} style={{marginTop:'30px', height: height -'200', overflowY:'scroll', paddingBottom:'20px'}}>
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
                <Col  sm={12} md={12} style={{padding: '10px 0'}}>
                    <Row>
                      
                        <Col xs={2} sm={1}>
                        <Button>
                                <IoIosLink />
                            </Button> 
                        </Col>
                        
                        
                        <Col  xs={8} sm={10} style={{background:'#242526'}}>
                            <Input />
                        </Col>
                        <Col xs={2} sm={1}>
                            <Button>
                                <IoMdSend />
                            </Button> 
                        </Col>
                    </Row>
              
                </Col>

        </Row>
  </Container>
  );
}

export default Chat;
