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
    font-size:15px; 
    display: block;
    width:auto;
`


export const MessageText= styled.div`
    display: inline-block;
    display: block;
    width:auto;
`


export const MessageDate= styled.div`
    font-size:10px; 
    width:auto;
    float:right;
`






