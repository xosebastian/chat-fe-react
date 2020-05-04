import  styled from 'styled-components';


export const ContainerMessage = styled.div`
    overflow:auto;
    padding-top: 20px;
`



export const MessageBox = styled.div`
    background:#3a3b3c;
    display: inline-block;
    width:auto;
    padding:10px;
`

export const MessageUsername = styled.div`
    color: ${ ({ color }) => `${ color }` };
   /*  margin-right:0px;
    font-size:15px; */
    display: inline-block;
    width:auto;
    padding:5px 10px;
`






