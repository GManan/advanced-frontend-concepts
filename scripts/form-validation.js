const form = document.getElementById('contact-form');
const formStatus = form.querySelector('.c-form-demo__status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  const fields = form.querySelectorAll('.c-form-demo__field');

  fields.forEach((field) => {
    const input = field.querySelector('input, textarea');
    const msg = field.querySelector('.c-form-demo__message');

    if (!input.checkValidity()) {
      msg.textContent = `Please enter a valid ${input.name}.`;
      msg.style.color = 'red';
      isValid = false;
    } else {
      msg.textContent = '';
    }
  });

  if (isValid) {
    formStatus.textContent = 'Form submitted successfully!';
    formStatus.style.color = 'green';
    form.reset();
  } else {
    formStatus.textContent = 'Please fix the errors above.';
    formStatus.style.color = 'red';
  }
});
