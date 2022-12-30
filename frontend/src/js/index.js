SERVICIOS = {
    'NF': 'Netflix',
    'AP': 'Amazon Video',
    'ST': 'Start+',
    'PM': 'Paramount+',
}

async function getPayments() {
    try {
      let response = await fetch('http://localhost:8000/pagos/', {
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
    let tbody = document.getElementById('payments-table');

    for (let i = 0; i < payments?.results.length; i++) {
      let payment = payments?.results[i];
      let tr = document.createElement('tr');

      tr.innerHTML = '<td>' + payment.fecha_pago + '</td><td>' + SERVICIOS[payment.servicio] + '</td><td>' + `S/ ${payment.monto}` + '</td>';
      tbody.appendChild(tr);
    }
  }
  
  window.onload = async () => {
    let payments = await getPayments();
    addPaymentRows(payments);
  }