import io from 'socket.io-client'; 



const socketUrl = 'http://localhost:5000/';

export const socket = io(socketUrl);

export const connectSocket = () => {
    return new Promise(resolve => {
        socket.on('connect', () => {
            resolve(socket);
        });
    });
};
