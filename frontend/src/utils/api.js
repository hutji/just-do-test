import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

const sendMessageToServer = (message) => {
  socket.emit('send-message', message);
};

export { sendMessageToServer };
