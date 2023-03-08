const form = document.querySelector('form');
const input = form.querySelector('input');
const messages = document.querySelector('.messages');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    addMessage(text, 'user');
    getResponse(text);
    input.value = '';
  }
});

function addMessage(text, sender) {
  const message = document.createElement('div');
  message.classList.add('message');
  message.classList.add(sender);
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function getResponse(text) {
  // Replace this with your own API or function that returns a response
  const response = 'Hello there!';
  addMessage(response, 'bot');
}
