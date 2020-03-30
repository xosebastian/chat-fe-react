import React from 'react';
import Header from '../../components/header';
import Aside from '../../components/aside';
import Chat from '../../components/chat';
import { Row, Container, Col } from 'react-grid';
import useWindowDimensions from '../../hooks/windowsDimension';



function Home() {
  const { height, width } = useWindowDimensions();


/*
  const sendMenssage =() => {
    alert();
    console.log();
    connectSocket()
    socket.emit('sendMenssage', {test: 'hola como estas?'});
  
  }

*/

  
  return (
    < >
      <Header >
         Zoxed - width: {width} ~ height: {height}
      </Header>
      <Container fluid onClick={() => sendMenssage()}>
        <Row >
    
            <Col xs={1}  sm={1} md={1} style={{padding:'0', height: height}}>
              <Aside />
            </Col>
         
          <Col xs={11} sm={11} md={11} style={{height: height, padding:'0'}}>
            <Chat height={height} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
