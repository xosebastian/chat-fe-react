import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/header';
import Aside from '../../components/aside';
import Chat from '../../components/chat';
import { Row, Container, Col } from 'react-grid';
import useWindowDimensions from '../../hooks/windowsDimension';




function Home() {


  const headerRef = useRef(null);
  const [  headerHeight, setHeaderHeight ] = useState(0)

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    let { clientHeight } = headerRef.current;
    setHeaderHeight(clientHeight);
  }, []);







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
    {
      /* 
    <  Header >
         Zoxed - width: {width} ~ height: {height}
      </Header>

            <Col xs={1}  sm={1} md={1} >
              <Aside />
            </Col>
         
          <Col xs={11} sm={11} md={11}>
            <Chat height={height} />
          </Col>
             <Col xs={2}  sm={2} md={2} style={{padding:'0',} }>
              <Aside>
                Aside
              </Aside>
            </Col>
      
      */
    }  
      <Container fluid  >
        <Row>
            <Header  ref={headerRef} >
              Zoxed - width: {width} ~ height: {height} ~ headerHeight: { headerHeight}
            </Header>
            <Aside height={height-headerHeight}>
                Aside
            </Aside>
  
         
          <Col xs={10} sm={10} md={10} style={{padding:0}}>
            <Chat height={height-headerHeight} />
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Home;
