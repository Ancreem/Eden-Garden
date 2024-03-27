// 1
export function getDistinctOrderStatus() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order/distinct-order-status', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Distinct Order Status";
        const statement = document.querySelector('#statement').textContent = "Returns a list with distinct order statuses.";

        let html = '';
        data.forEach(status => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Status</h1>
                            <br>
                            <h2>${status}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

export function getDelayedOrders() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order/delayed-orders', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Delayed Orders";
        const statement = document.querySelector('#statement').textContent = "Returns a list with order details for delayed orders.";

        let html = '';
        data.forEach(order => {
            const orderCode = order[0];
            const customerCode = order[1];
            const expectedDate = order[2];
            const deliverDate = order[3];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Order</h1>
                            <br>
                            <h2>Order Code: ${orderCode}</h2>
                            <li><strong>Customer Code: </strong>${customerCode}</li>
                            <li><strong>Expected Date: </strong>${expectedDate}</li>
                            <li><strong>Deliver Date: </strong>${deliverDate}</li>
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
export function findOrdersWithLateDelivery() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order/late-delivery', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Orders with Late Delivery";
        const statement = document.querySelector('#statement').textContent = "Returns a list with order details for orders with late delivery.";

        let html = '';
        data.forEach(order => {
            const orderCode = order[0];
            const customerCode = order[1];
            const expectedDate = order[2];
            const deliverDate = order[3];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Order</h1>
                            <br>
                            <h2>Order Code: ${orderCode}</h2>
                            <li><strong>Customer Code: </strong>${customerCode}</li>
                            <li><strong>Expected Date: </strong>${expectedDate}</li>
                            <li><strong>Deliver Date: </strong>${deliverDate}</li>
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
// Función para mostrar pedidos rechazados en 2009 en el HTML
export function findRejectedOrdersIn2009() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order/rejected-2009', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Rejected Orders in 2009";
        const statement = document.querySelector('#statement').textContent = "Returns a list of all orders that were rejected in 2009.";

        let html = '';
        data.forEach(order => {
            const orderCode = order[0];
            const orderDate = order[1];
            const expectedDate = order[2];
            const deliverDate = order[3];
            const status = order[4];
            const comments = order[5];
            const customerName = order[6];

            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Order Code: ${orderCode}</h1>
                            <br>
                            <p>Order Date: ${orderDate}</p>
                            <p>Expected Date: ${expectedDate}</p>
                            <p>Delivery Date: ${deliverDate}</p>
                            <p>Status: ${status}</p>
                            <p>Comments: ${comments}</p>
                            <p>Customer Name: ${customerName}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


// 5
// Función para mostrar pedidos entregados en enero en el HTML
export function findOrdersDeliveredInJanuary() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order/delivered-in-january', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Orders Delivered in January";
        const statement = document.querySelector('#statement').textContent = "Returns a list of all orders that were delivered in January of any year.";

        let html = '';
        data.forEach(order => {
            const orderCode = order[0];
            const orderDate = order[1];
            const expectedDate = order[2];
            const deliverDate = order[3];
            const status = order[4];
            const comments = order[5];
            const customerName = order[6];

            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Order Code: ${orderCode}</h1>
                            <br>
                            <p>Order Date: ${orderDate}</p>
                            <p>Expected Date: ${expectedDate}</p>
                            <p>Delivery Date: ${deliverDate}</p>
                            <p>Status: ${status}</p>
                            <p>Comments: ${comments}</p>
                            <p>Customer Name: ${customerName}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


// 6
export function countOrderByStatus() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order/count-order-by-status', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const ordersContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Orders Count by Status";
        const statement = document.querySelector('#statement').textContent = "Returns a count of orders grouped by status.";

        let html = '';
        data.forEach(orderStatus => {
            const status = orderStatus[0];
            const count = orderStatus[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Order Status</h1>
                            <br>
                            <p>Status: ${status}</p>
                            <p>Count: ${count}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        ordersContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}