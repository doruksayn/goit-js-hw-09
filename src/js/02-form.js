const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const data = JSON.parse(savedData);
    form.email.value = data.email || '';
    form.message.value = data.message || '';
  }
}

form.addEventListener('input', e => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!email || !message) {
    alert('Please fill in all fields!');
    return;
  }

  const formData = {
    email: email,
    message: message,
  };

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();
});

loadFormData();
