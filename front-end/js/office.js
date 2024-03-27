// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
export function getOfficeCodeAndCity() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/office/office-code-and-city', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const officeCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Office Code and City";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the office code and city where there are offices.";

        let html = '';
        data.forEach(office => {
            const officeCode = office[0];
            const city = office[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Office</h1>
                            <br>
                            <h2>Office Code: ${officeCode}</h2>
                            <h2>City: ${city}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        officeCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export function getCityAndPhoneInSpain() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/office/city-and-phone-in-spain', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const officeCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "City and Phone in Spain";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the city and phone of the offices in Spain.";

        let html = '';
        data.forEach(office => {
            const city = office[0];
            const phone = office[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Office</h1>
                            <br>
                            <h2>City: ${city}</h2>
                            <h2>Phone: ${phone}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        officeCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}



// 3. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export function findCustomersWithPaymentsAndTheirSalesRepAndOfficeCity() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/office/get-customers-with-payments-and-their-sales-reps-and-office-city', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customers with Payments and their Sales Reps and Office City";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the name of customers who have made payments, the name of their sales representatives, and the city of the office to which the representative belongs.";

        let html = '';
        data.forEach(item => {
            const customerName = item[0];
            const salesRepName = item[1];
            const salesRepLastName = item[2];
            const officeCity = item[3];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer</h1>
                            <br>
                            <h2>Customer Name: ${customerName}</h2>
                            <h2>Sales Rep Name: ${salesRepName} ${salesRepLastName}</h2>
                            <h2>Office City: ${officeCity}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 4
export function findOfficeAddressesInFuenlabrada() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/office/fuenlabrada-office-addresses', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const officeCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Office Addresses in Fuenlabrada";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the addresses of all offices in Fuenlabrada.";

        let html = '';
        data.forEach(address => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Office Address</h1>
                            <br>
                            <h2>${address}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        officeCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 5
export function getOfficesNotEmployeesHaveClientWithGamaFrutales() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/office/ofices-not-employees-have-client-with-gama-frutales', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const officeCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Offices without Employees with Clients with Gama Frutales";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the office codes of all offices where there are no employees who have clients with products of the Gama Frutales.";

        let html = '';
        data.forEach(officeCode => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Office Code</h1>
                            <br>
                            <h2>${officeCode}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        officeCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}
