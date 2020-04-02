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



  
  return (
    < >
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
