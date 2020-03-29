import React from 'react';
import { Title } from './styled';



function RoomTitle(props) {


    const {children} = props;

    console.log(props);

  return (


          <Title {...props}>
           {children}
          </Title>

  );
}

export default RoomTitle;
