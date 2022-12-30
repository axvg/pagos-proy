async function login(email, password) {
  try {
    var response = await fetch('http://localhost:8000/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var response = await login(email, password);
  if (response) {
    localStorage.setItem('jwt', response.tokens.access);
    window.location.href = './index.html';
    console.log(response.tokens);
  } else {
    console.log('There was an error logging in. Please check your email and password and try again.');
  }
});