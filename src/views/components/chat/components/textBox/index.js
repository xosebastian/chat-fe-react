import React, {useState} from 'react';
import { Row, Col } from 'react-grid';
import { IoMdSend  } from "react-icons/io";
import  { Button }  from './styled';
import Input from '../../../Input';
import {connectSocket, socket} from '../../../../../core/socket.config';

const TextBox = React.forwardRef((props, ref) => {

    connectSocket();
    
   const [value, setValue] = useState('');



   const handleSendMenssage =() => {    

        // eslint-disable-next-line no-unused-expressions
        (value && value.length < 126) && (
            socket.emit('sendMessage', {
                user: 'anonimus',
                color: props.color,
                message: value,
                username: props.username,
            },
            setValue('')
            )
        );
   }


    return (

      <Col sm={12} md={12}>
        <div {...props} ref={ref}>
          <Row style={{padding:'10px 0'}}>
            <Col xs={2} sm={2} />
            <Col xs={8} sm={8} style={{background:'#242526'}}>
              <Input value={value} onChange={(e) => (setValue(e.target.value))} handleSendMenssage={handleSendMenssage} />
            </Col>
            <Col xs={2} sm={2}>
              <Button onClick={handleSendMenssage}>
                <IoMdSend />
              </Button> 
            </Col>
          </Row>
        </div>
      </Col>

    )
});

export default TextBox;











