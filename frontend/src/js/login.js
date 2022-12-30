import axios from 'axios';
async function login(email, password) {
    try {
      // Send login request to API
      var response = await axios.post('http://localhost:8000/users/login/', {
        email: email,
        password: password
      });
      // Return token on successful login
      return response.data.token;
    } catch (error) {
      // Log error and return null on login error
      console.error(error);
      return null;
    }
  }

// Handle form submission
document.getElementById('login-form').addEventListener('submit', async function(event) {
    // Prevent form submission
    event.preventDefault();
  
    // Get form data
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Attempt login
    var token = await login(email, password);
    if (token) {
      // Store token in session storage and redirect to protected page on successful login
      sessionStorage.setItem('jwt', token);
      window.location.href = '/protected';
      console.log('Login correct!')
    } else {
      // Display error message on login error
      alert('There was an error logging in. Please check your email and password and try again.');
    }
  });