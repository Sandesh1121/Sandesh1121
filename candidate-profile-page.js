const editProfileButton = document.querySelector('.edit-profile-button');
const saveProfileButton = document.querySelector('.save-profile-button');
const editProfilePictureButton = document.querySelector('.edit-profile-picture-button');
const changePasswordButton = document.querySelector('.change-password-button');
const savePasswordButton = document.querySelector('.save-password-button');
const profilePicture = document.querySelector('.profile-picture img');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const usernameField = document.getElementById('username');
const additionalInfoField = document.getElementById('additional-info');
const skillsField = document.getElementById('skills');
const educationField = document.getElementById('education');
const passwordContainer = document.querySelector('.password-container');
const passwordInputs = passwordContainer.querySelectorAll('input');

editProfileButton.addEventListener('click', () => {
  nameField.contentEditable = true;
  emailField.contentEditable = true;
  phoneField.contentEditable = true;
  usernameField.contentEditable = true;
  additionalInfoField.removeAttribute('readonly');
  skillsField.removeAttribute('readonly');
  educationField.removeAttribute('readonly');
  editProfilePictureButton.style.display = 'inline-block';
  changePasswordButton.style.display = 'inline-block';

  editProfileButton.style.display = 'none';
  saveProfileButton.style.display = 'inline-block';
});

saveProfileButton.addEventListener('click', () => {
  const nameValue = nameField.textContent.trim();
  const emailValue = emailField.textContent.trim();
  const phoneValue = phoneField.textContent.trim();
  const usernameValue = usernameField.textContent.trim();

  const requiredFields = [
    { field: nameValue, fieldName: 'Name', fieldElement: nameField },
    { field: emailValue, fieldName: 'Email', fieldElement: emailField },
    { field: phoneValue, fieldName: 'Phone', fieldElement: phoneField },
    { field: usernameValue, fieldName: 'Username', fieldElement: usernameField }
  ];

  for (const { field, fieldName, fieldElement } of requiredFields) {
    if (field === '') {
      fieldElement.nextElementSibling.textContent = `Error: Please write your ${fieldName}`;
      fieldElement.nextElementSibling.style.color = 'red';
      return;
    }
  }

  // Save profile logic here

  nameField.contentEditable = false;
  emailField.contentEditable = false;
  phoneField.contentEditable = false;
  usernameField.contentEditable = false;
  additionalInfoField.setAttribute('readonly', 'true');
  skillsField.setAttribute('readonly', 'true');
  educationField.setAttribute('readonly', 'true');
  editProfilePictureButton.style.display = 'none';
  changePasswordButton.style.display = 'none';

  passwordContainer.style.display = 'none';
  editProfileButton.style.display = 'inline-block';
  saveProfileButton.style.display = 'none';
});

editProfilePictureButton.addEventListener('click', () => {
  const newProfilePicture = prompt('Enter the URL of the new profile picture:');
  if (newProfilePicture) {
    profilePicture.src = newProfilePicture;
  }
});

changePasswordButton.addEventListener('click', () => {
  passwordContainer.style.display = 'block';
});

savePasswordButton.addEventListener('click', () => {
  const oldPassword = document.getElementById('old-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (oldPassword === '') {
    alert('Please enter your old password.');
    return;
  }

  if (newPassword === '') {
    alert('Please enter your new password.');
    return;
  }

  if (confirmPassword === '') {
    alert('Please confirm your new password.');
    return;
  }

  // Validate password and perform necessary actions

  passwordInputs.forEach((input) => {
    input.value = '';
  });

  passwordContainer.style.display = 'none';
  changePasswordButton.style.display = 'inline-block';
});

profilePicture.addEventListener('click', () => {
  profilePicture.classList.toggle('zoomed');
});
