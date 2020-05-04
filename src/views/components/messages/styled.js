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
    background:${`#${   Math.random().toString(16).substr(-6)}`};
    margin-right:5px;
    display: inline-block;
    width:auto;
    padding:10px;
`






