import React from 'react';
import Header from '../../components/header';
import Aside from '../../components/aside';
import Chat from '../../components/chat';
import { Row, Container, Col } from 'react-grid';
import useWindowDimensions from '../../hooks/windowsDimension';
import { isMobile } from 'mobile-device-detect';
import { connectSocket, socket } from '../../../core/socket.config';




function Home() {
  const { height, width } = useWindowDimensions();



  const sendMenssage =() => {
    alert();
    console.log();
    connectSocket()
    socket.emit('sendMenssage', {test: 'hola como estas?'});
  
  }



  
  return (
    < >
      <Header >
         Zoxed - width: {width} ~ height: {height}
      </Header>
      <Container fluid onClick={() => sendMenssage()}>
        <Row >
    
            <Col xs={2}  sm={2} md={2} style={{padding:'0', height: height}}>
              <Aside />
            </Col>
         
          <Col xs={10} sm={10} md={10} style={{height: height, padding:'0'}}>
            <Chat height={height} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
