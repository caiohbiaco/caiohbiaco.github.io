document.getElementById('contact-form').addEventListener(
   "submit", function(event) {
    event.preventDefault();
    console.log(event);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtolink = 
    `mailto:${email}?
    subject=${encodeURIComponent('Assunto Reunião')} 
    &body=${encodeURIComponent(message)}`;

    window.location.href = mailtolink;
   }
);