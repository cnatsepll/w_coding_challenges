document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);
function loadCustomer(e) {
  // instantiate XHR
  const xhr = new XMLHttpRequest();
  // call open async
  xhr.open('GET', 'customer.json', true);
  // ONLOAD
  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }
  // call send
  xhr.send();
}

function loadCustomers(e) {
  // instantiate XHR
  const xhr = new XMLHttpRequest();
  // call open async
  xhr.open('GET', 'customers.json', true);
  // ONLOAD
  xhr.onload = function () {
    if (this.status === 200) {
      // this version will be dealing with multiple customers
      // so we will have to itterate through our returned values to create an output
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(function(customer){
      // since we want to aggregate an output response we are using += here to assign new values
      output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      });
      document.getElementById('customers').innerHTML = output;
    }
  }
  // call send
  xhr.send();
}