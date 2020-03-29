import React from 'react';
import { Row, Col } from 'react-grid';
import {Header as Header_, LogoText} from './styled';
import { IoIosBug } from "react-icons/io";


function Header({children}) {
  return (

  <Header_ fluid>
      <Row>
          <Col>
            <LogoText><IoIosBug  style={{verticalAlign: 'text-top'}}  /> {children}</LogoText>
          </Col>
      </Row>
  </Header_>
  );
}

export default Header;
