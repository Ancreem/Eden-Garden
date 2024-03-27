//1 
export function customerCodesWithPaymentsIn2008() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/payment/customer-codes-with-payments-in-2008', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Customer Codes with Payments in 2008";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the customer codes of customers who made payments in 2008.";

        let html = '';
        data.forEach(customerCode => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Customer Code</h1>
                            <br>
                            <h2>${customerCode}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

//2 
export function paypalPaymentsIn2008OrderByTotalDesc() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/payment/paypal-payments-2008', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Paypal Payments in 2008";
        const statement = document.querySelector('#statement').textContent = "Returns a list with all payments made in 2008 via Paypal, ordered from highest to lowest.";

        let html = '';
        data.forEach(paymentTotal => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Payment Total</h1>
                            <br>
                            <h2>${paymentTotal}</h2>
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
export function distinctPaymentMethods() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/payment/distinct-payment-methods', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Distinct Payment Methods";
        const statement = document.querySelector('#statement').textContent = "Returns a list with all distinct payment methods.";

        let html = '';
        data.forEach(paymentMethod => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Payment Method</h1>
                            <br>
                            <h2>${paymentMethod}</h2>
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
export function findAveragePaymentTotalForYear2009() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/payment/find-average-payment-total-for-year', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Average Payment Total for 2009";
        const statement = document.querySelector('#statement').textContent = "Returns the average payment total for the year 2009.";

        const averagePayment = data.toFixed(2); // Limitar a dos decimales

        let html = `
            <div class="card">
                <div class="head">
                    <div>
                        <h1>Average Payment Total</h1>
                        <br>
                        <h2>${averagePayment}</h2>
                    </div>
                </div>
            </div>
        `;
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

//5 
export function getTotalPaymentsByYear() {
    const token = sessionStorage.getItem('jwtToken');
    fetch('http://localhost:8080/payment/get-total-payments-by-year', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Total Payments by Year";
        const statement = document.querySelector('#statement').textContent = "Returns the total sum of payments for each year.";

        let html = '';
        data.forEach(item => {
            const year = item[0];
            const totalPayment = item[1];

            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Year: ${year}</h1>
                            <br>
                            <h2>Total Payment: ${totalPayment}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}
