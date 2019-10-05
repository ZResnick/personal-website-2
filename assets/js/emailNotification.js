console.log('hello world!!');

const button = document.getElementById('sendMessageButton');

button.addEventListener('click', evt => {
  evt.preventDefault();
  console.log('Hello World');
});
