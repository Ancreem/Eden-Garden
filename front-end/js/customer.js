
// 1

export function spanishCustomers() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/customers/spanish-customers', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Spanish Customers";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the name of all Spanish customers.";

        let html = '';
        data.forEach(customerName => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customerName}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


// 2
export function madridSalesRep11To30() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/madrid-sales-rep-11-30', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Madrid Customers with Sales Rep 11 or 30";
        const statement = document.querySelector('#statement').textContent = "Returns a list with all customers in Madrid whose sales representative has an employee code of 11 or 30.";

        let html = '';
        data.forEach(customerName => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customerName}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 3
export function customerSalesRep() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/customers/customer-salesrep', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers with Sales Representatives";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the name of each customer and the name and last name of their sales representative.";

        let html = '';
        data.forEach(item => {
            const customerName = item[0];
            const salesRepName = item[1];
            const salesRepLastName = item[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customerName}</h2>
                            <h3>Sales Representative: ${salesRepName} ${salesRepLastName}</h3>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

//4
export function customersWithPayments() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/customers-with-payments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers with Payments and Sales Rep";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the name of each customer and the name and last name of their sales representative.";

        let html = '';
        data.forEach(customerData => {
            const customerName = customerData[0];
            const salesRepName = customerData[1];
            const salesRepLastName1 = customerData[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customerName}</h2>
                            <li><strong>Sales Rep Name: </strong> ${salesRepName} ${salesRepLastName1}</li>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

//5
export function customersWithoutPayments() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/customers-without-payments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers without Payments and their Sales Reps";
        const statement = document.querySelector('#statement').textContent = "Returns the name of the customers who have not made payments along with the name of their sales representatives.";

        let html = '';
        data.forEach(customerData => {
            const customerName = customerData[0];
            const salesRepName = customerData[1];
            const salesRepLastName1 = customerData[2];

            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customerName}</h2>
                            <br>
                            <h3>Sales Rep: ${salesRepName} ${salesRepLastName1}</h3>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

//6
export function customersWithPaymentsRepCity() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/customers-with-payments-rep-city', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers with Payments, Sales Rep and Office City";
        const statement = document.querySelector('#statement').textContent = "Returns the name of customers who have made payments along with the name and last name of their sales representatives and the city of the office to which the representative belongs.";

        let html = '';
        data.forEach(record => {
            const customerName = record[0];
            const salesRepName = record[1];
            const salesRepLastName = record[2];
            const officeCity = record[3];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customerName}</h2>
                            <li><strong>Sales Rep: </strong> ${salesRepName} ${salesRepLastName}</li>
                            <li><strong>Office City: </strong> ${officeCity}</li>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

//7
export function withoutPayments() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/without-payments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers without Payments";
        const statement = document.querySelector('#statement').textContent = "Returns the names of customers who have not made payments, along with the name of their representatives and the city of the office to which the representative belongs.";

        let html = '';
        data.forEach(entry => {
            const customerName = entry[0];
            const representativeName = entry[1];
            const officeCity = entry[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customerName}</h2>
                            <h3>Representative: ${representativeName}</h3>
                            <h3>Office City: ${officeCity}</h3>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


//  8
export function distinctCustomerRepresentativeOffice() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/distinct-customer-representative-office', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Distinct Customer Representative Office";
        const statement = document.querySelector('#statement').textContent = "Returns the name of customers and the name of their representatives along with the city of the representative's office.";

        let html = '';
        data.forEach(entry => {
            const customerName = entry[0];
            const representativeName = entry[1];
            const officeCity = entry[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <h2>${customerName}</h2>
                            <br>
                            <h3>Representative: ${representativeName}</h3>
                            <h3>Office City: ${officeCity}</h3>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


// Consulta 9: Clientes que no han realizado ningún pago y los que no han realizado ningún pedido
export function customersDoNotPayAnyOrders() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/customers-do-not-pay-any-orders', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers with No Payments or Orders";
        const statement = document.querySelector('#statement').textContent = "Returns a list of customers who have not made any payments or orders.";

        let html = '';
        data.forEach(customer => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customer.customerName}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// Consulta 10: Clientes que han realizado algún pedido pero no han realizado ningún pago
export function findCustomersWithOrdersButNoPayments() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/find-customers-with-orders-but-no-payments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers with Orders but No Payments";
        const statement = document.querySelector('#statement').textContent = "Returns a list of customers who have made orders but have not made any payments.";

        let html = '';
        data.forEach(customer => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>${customer.customerName}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 11. Función para la consulta de cuántos clientes tiene cada país
export function countCustomersByCountry() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/count-customers-by-country', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers by Country";
        const statement = document.querySelector('#statement').textContent = "Returns the number of customers for each country.";
  
        let html = '';
        data.forEach(countryData => {
            const country = countryData[0];
            const count = countryData[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Country: ${country}</h1>
                            <br>
                            <h2>Number of Customers: ${count}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
  }
  
  // 12. Función para la consulta del número de clientes que tiene la empresa
  export function countCustomer() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/count-customer', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Total Customers";
        const statement = document.querySelector('#statement').textContent = "Returns the total number of customers.";
  
        let html = '';
        html += `
            <div class="card">
                <div class="head">
                    <div>
                        <h1>Total Customers</h1>
                        <br>
                        <h2>${data}</h2>
                    </div>
                </div>
            </div>
        `;
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
  }
  
  // 13. Función para la consulta del número de clientes que existen con domicilio en la ciudad de Madrid
  export function countCustomersByCityMadrid() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/count-customers-by-city-madrid', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers in Madrid";
        const statement = document.querySelector('#statement').textContent = "Returns the number of customers with residence in the city of Madrid.";
  
        let html = '';
        html += `
            <div class="card">
                <div class="head">
                    <div>
                        <h1>Customers in Madrid</h1>
                        <br>
                        <h2>${data}</h2>
                    </div>
                </div>
            </div>
        `;
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
  }
  
//14 Función para la consulta del número de clientes que tiene cada una de las ciudades que empiezan por M
export function countCustomersByCityStartingWithM() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/count-customers-by-city-starting-with-m', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers by City Starting with M";
        const statement = document.querySelector('#statement').textContent = "Returns the number of customers in each city that starts with 'M'.";

        let html = '';
        data.forEach(cityData => {
            const city = cityData[0];
            const count = cityData[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>City: ${city}</h1>
                            <br>
                            <h2>Number of Customers: ${count}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}



// 15 Función para la consulta del número de clientes que no tiene asignado representante de ventas
export function countCustomersWithNoSalesRepresentative() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/count-customers-with-no-sales-representative', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(count => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers with No Sales Representative";
        const statement = document.querySelector('#statement').textContent = "Returns the number of customers without a sales representative.";

        const html = `
            <div class="card">
                <div class="head">
                    <div>
                        <h1>Number of Customers: ${count}</h1>
                    </div>
                </div>
            </div>
        `;
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 16 Función para la consulta de la fecha del primer y último pago realizado por cada uno de los clientes
export function findMinMaxPaymentDatesByCustomer() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/customers/find-min-max-payment-dates-by-customer', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Min-Max Payment Dates by Customer";
        const statement = document.querySelector('#statement').textContent = "Returns the first and last payment dates for each customer.";

        let html = '';
        data.forEach(paymentData => {
            const customerName = paymentData[0];
            const minPaymentDate = paymentData[1];
            const maxPaymentDate = paymentData[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer: ${customerName}</h1>
                            <br>
                            <h2>Min Payment Date: ${minPaymentDate}</h2>
                            <h2>Max Payment Date: ${maxPaymentDate}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}
