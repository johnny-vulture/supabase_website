const socket = io('http://localhost:3000');

const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const messagesContainer = document.querySelector('.chat-messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('chatMessage', message);
});

socket.on('message', message => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
