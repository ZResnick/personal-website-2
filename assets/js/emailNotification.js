console.log('hello world!!');

const button = document.getElementById('sendMessageButton');

button.addEventListener('click', evt => {
  evt.preventDefault();

  let email = document.getElementById('emailAddress').value;
  let sender = document.getElementById('sender').value;
  let content = document.getElementById('emailContent').value;

  let templateParams = {
    email,
    sender,
    content,
  };

  let serviceId = 'default_service';
  let templateId = 'template_qbGQANvs';
  emailjs.send(serviceId, templateId, templateParams).then(
    function(response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function(error) {
      console.log('FAILED...', error);
    }
  );
});
