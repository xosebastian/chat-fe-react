import React from 'react';
import { Row, Col } from 'react-grid';
import  { Button }  from './styled';
import { IoMdSend  } from "react-icons/io";
import Input from '../../../Input';

const TextBox = React.forwardRef((props, ref) => (

    <Col  sm={12} md={12}>
        <div {...props} ref={ref}>
            <Row style={{padding:'10px 0'}}>
                <Col xs={2} sm={2} />
                <Col  xs={8} sm={8} style={{background:'#242526'}}>
                    <Input />
                </Col>
                <Col xs={2} sm={2}>
                    <Button>
                        <IoMdSend />
                    </Button> 
                </Col>
            </Row>
        </div>
    </Col>

));

export default TextBox;











