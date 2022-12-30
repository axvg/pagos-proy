async function getPayments() {
    try {
      var response = await fetch('http://localhost:8000/pagos/', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  function addPaymentRows(payments) {
    var tbody = document.getElementById('payments-table');
    tbody.innerHTML = '';
    for (var i = 0; i < payments.length; i++) {
      var payment = payments[i];
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + payment.date + '</td><td>' + payment.service + '</td><td>' + payment.user + '</td><td>' + payment.amount + '</td>';
      tbody.appendChild(tr);
    }
  }
  
  window.addEventListener('load', async function() {
    var payments = await getPayments();
    console.log(payments.results)
    addPaymentRows(payments);
  });