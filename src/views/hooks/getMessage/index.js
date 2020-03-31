import React, { useState, useEffect } from 'react';
import {socket} from '../../../core/socket.config';

export default function  useMesagge  () {
const [ messages , setMessages ] = useState([{user: "anonimus", message: "123123123"}])

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {


    try {
        socket.on('reciveMessage', (messageFromSocket)=>{


            console.log(messages);
     
            console.log([...messages, messageFromSocket]);

            setMessages([...messages, messageFromSocket]);
        })
    }catch (error) {
        console.log(error);
    }
    return () => {
        //socket.close();
    };

  }, []);

  return messages;

};



