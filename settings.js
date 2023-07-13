const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const editButton = document.querySelector('.edit-button');
const saveButton = document.querySelector('.save-button');
const passwordFields = document.querySelector('.password-fields');
const changePasswordButton = document.querySelector('.change-password-button');
const notificationSelect = document.getElementById('notification');

tabButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetTab = event.target.dataset.tab;

    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove('active');
    });
    button.classList.add('active');

    tabContents.forEach((tabContent) => {
      if (tabContent.id === targetTab) {
        tabContent.classList.add('active');
      } else {
        tabContent.classList.remove('active');
      }
    });

    if (targetTab === 'privacy' || targetTab === 'terms') {
      editButton.style.display = 'none';
      saveButton.style.display = 'none';
    } else {
      editButton.style.display = 'block';
      saveButton.style.display = 'none';
    }
  });
});

editButton.addEventListener('click', () => {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input:not([type="password"]), select');

  inputs.forEach((input) => {
    input.removeAttribute('readonly');
  });

  changePasswordButton.style.display = 'block';
  saveButton.style.display = 'block';
  editButton.style.display = 'none';

  const passwordField = document.querySelector('input[type="password"]');
  passwordField.setAttribute('readonly', true);
  passwordFields.style.display = 'none';

  notificationSelect.removeAttribute('disabled');
});

changePasswordButton.addEventListener('click', () => {
  passwordFields.style.display = 'block';
});

saveButton.addEventListener('click', () => {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input:not([type="password"]), select');

  inputs.forEach((input) => {
    input.setAttribute('readonly', true);
  });

  passwordFields.style.display = 'none';
  changePasswordButton.style.display = 'none';
  saveButton.style.display = 'none';
  editButton.style.display = 'block';

  notificationSelect.setAttribute('disabled', true);
});

document.getElementById('password').addEventListener('input', (event) => {
  const password = event.target.value;

  if (password.length >= 8) {
    changePasswordButton.style.display = 'block';
  } else {
    changePasswordButton.style.display = 'none';
  }
});

// Initially hide the save button and password fields
saveButton.style.display = 'none';
passwordFields.style.display = 'none';

const deleteButton = document.querySelector('.delete-button');

deleteButton.addEventListener('click', () => {
  const confirmation = confirm('Are you sure you want to delete your account?');
  if (confirmation) {
    // Perform account delete logic here
    alert('Account deleted successfully!');
  }
});
