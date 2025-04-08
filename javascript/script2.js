function togglePassword() {
  const Input = document.getElementById('InputPassword');
  const eyeIcon = document.getElementById('eye-icon');
  if (Input.type === 'password') {
    Input.type = 'text';
    eyeIcon.src = 'https://img.icons8.com/ios-filled/20/000000/invisible.png';
  } else {
    Input.type = 'password';
    eyeIcon.src = 'https://img.icons8.com/ios-filled/20/000000/visible.png';
  }
}

function validateForm() {
  var username = document.getElementById('InputUsername');
  var email = document.getElementById('InputEmail');
  var password = document.getElementById('InputPassword');
  var isValid = true;

  // Reset error messages
  username.classList.remove('is-invalid');
  email.classList.remove('is-invalid');
  password.classList.remove('is-invalid');

  // Check if username is empty or less than 3 characters
  if (username.value === "" || username.value.length < 3) {
    username.classList.add('is-invalid');
    isValid = false; // Prevent form submission
  }

  // Check if email is empty, less than 3 characters or invalid
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value === "" || email.value.length < 3 || !emailPattern.test(email.value)) {
    email.classList.add('is-invalid');
    isValid = false; // Prevent form submission
  }

  // Check if password is empty or less than 3 characters
  if (password.value === "" || password.value.length < 3) {
    password.classList.add('is-invalid');
    isValid = false; // Prevent form submission
  }

  return isValid;
}

function toggleDarkMode() {
  const toggle = document.getElementById('toggle-icon');
  const loginContainer = document.getElementById("login-container")
  const btns = document.querySelectorAll('.btn');
  const sohanemkerdezzukajelszavad = document.getElementById('emailHelp')
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    loginContainer.style.backgroundColor = '#0d0d0d';
    sohanemkerdezzukajelszavad.style.color = '#FFFFFF'
    btns.forEach(btn => {
      btn.style.color = 'white';
    });

  } else {
    document.body.classList.remove('dark-mode');
    loginContainer.style.backgroundColor = '#FFFFFF';
    sohanemkerdezzukajelszavad.style.color = '#4d4c4c'
    btns.forEach(btn => {
      btn.style.color = 'black';
    });
  }
}