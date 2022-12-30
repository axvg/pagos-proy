const paymentForm = document.getElementById('payment-form');

async function addPayment(event) {
  event.preventDefault();

  const date = document.getElementById('date').value;
  const service = document.getElementById('service').value;
  const user = document.getElementById('user').value;
  const amount = document.getElementById('amount').value;

  const data = {
    date: date,
    service: service,
    user: user,
    amount: amount
  };

  const token = localStorage.getItem('token');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(data)
  };

  const response = await fetch('http://localhost:8000/pagos/add/', options);
  const result = await response.json();

  if (result.success) {
    alert('Payment added successfully');
    window.location.href = '/index.html';
  } else {
    alert('Error adding payment');
  }
}

paymentForm.addEventListener('submit', addPayment);
