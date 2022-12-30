async function login(email, password) {
  try {
    let response = await fetch('http://localhost:8000/users/login/', {
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

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let response = await login(email, password);
  let tokens = response?.tokens
  if (tokens) {
    localStorage.setItem('jwt', tokens?.access);
    window.location.replace('./index.html');
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo inválido o contraseña incorrecta',
    });
  }
});