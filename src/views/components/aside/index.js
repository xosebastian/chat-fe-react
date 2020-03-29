import React from 'react';
import { Row, Col } from 'react-grid';
import {Aside as Aside_} from './styled';


function Aside({children}) {
  return (

  <Aside_>
      <Row>
          <Col>
            Aside
          </Col>
      </Row>
  </Aside_>
  );
}

export default Aside;
