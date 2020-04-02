import React, {useRef, useEffect} from 'react';
import { Row, Col, Container } from 'react-grid';
import {ContainerMessages} from './styled';


function MessagesList(props) {

    const {messages, height} = props;
    let containerMessagesRef = useRef(null);


    useEffect(() => {
        scrollToBottom()
    }, [props])


    const scrollToBottom = () =>{
        containerMessagesRef && (containerMessagesRef.current.scrollTop = containerMessagesRef.current.scrollHeight);
    }
 

  return (




    

    <ContainerMessages ref={containerMessagesRef} height={height}>
        <Col   sm={12} md={12} style={{paddingTop:'20px'}}>
            {  messages && messages.map(item =>
                ((item.user && item.message) &&
                    <div>
                        {item.user} : {item.message}
                    </div>
                )
            )}
    </Col>
</ContainerMessages>




  );
}

export default MessagesList;
