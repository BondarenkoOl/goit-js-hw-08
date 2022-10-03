import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const keyValue = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(inputUserData, 500));
feedbackForm.addEventListener('submit', submitUserData);

function inputUserData() {
  const savedInputData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(keyValue, JSON.stringify(savedInputData));
}

function getSavedData() {
  const storagedData = JSON.parse(localStorage.getItem(keyValue));

  if (storagedData) {
    emailInput.value = storagedData.email;
    messageInput.value = storagedData.message;
  }
}
getSavedData();

function submitUserData(evt) {
  evt.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return window.alert('Enter information in oll field!');
  }
  console.log(JSON.parse(localStorage.getItem(keyValue)));
  localStorage.removeItem(keyValue);
  feedbackForm.reset();
}
