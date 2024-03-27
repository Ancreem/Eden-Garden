// 1
export function countDistinctProductsByOrder() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order-detail/count-distinct-products-by-order', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data'); // Contenedor HTML
        const point = document.querySelector('#point').textContent = "Distinct Products by Order"; // Punto de la consulta
        const statement = document.querySelector('#statement').textContent = "Returns the number of different products in each order."; // Descripción de la consulta
        
        let html = '';
        data.forEach(item => {
            const orderCode = item[0];
            const productCount = item[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Order Code: ${orderCode}</h1>
                            <br>
                            <h2>Distinct Products: ${productCount}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html; // Insertar HTML generado en el contenedor
    })
    .catch(error => console.error('Error:', error));
}

// 2
export function sumQuantityByOrder() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order-detail/sum-quantity-by-order', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data'); // Contenedor HTML
        const point = document.querySelector('#point').textContent = "Total Quantity by Order"; // Punto de la consulta
        const statement = document.querySelector('#statement').textContent = "Returns the total quantity of all products in each order."; // Descripción de la consulta
        
        let html = '';
        data.forEach(item => {
            const orderCode = item[0];
            const totalQuantity = item[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Order Code: ${orderCode}</h1>
                            <br>
                            <h2>Total Quantity: ${totalQuantity}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html; // Insertar HTML generado en el contenedor
    })
    .catch(error => console.error('Error:', error));
}


// 3
export function findTop20ProductsByTotalSold() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order-detail/find-top-20-products-by-total-sold', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data'); // Contenedor HTML
        const point = document.querySelector('#point').textContent = "Top 20 Sold Products"; // Punto de la consulta
        const statement = document.querySelector('#statement').textContent = "Returns the top 20 products sold and the total number of units sold for each one. The list is ordered by the total number of units sold."; // Descripción de la consulta
        
        let html = '';
        data.forEach(item => {
            const productCode = item[0];
            const totalSold = item[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Product Code: ${productCode}</h1>
                            <br>
                            <h2>Total Sold: ${totalSold}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html; // Insertar HTML generado en el contenedor
    })
    .catch(error => console.error('Error:', error));
}


// 4
export function calculateInvoiceTotals() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order-detail/calculate-invoice-totals', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data'); // Contenedor HTML
        const point = document.querySelector('#point').textContent = "Invoice Totals"; // Punto de la consulta
        const statement = document.querySelector('#statement').textContent = "Returns the total billing of the company throughout its history, indicating the taxable base, the VAT, and the total invoiced."; // Descripción de la consulta
        
        let html = '';
        data.forEach(item => {
            const baseImponible = item[0];
            const iva = item[1];
            const totalFacturado = item[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Invoice Totals</h1>
                            <br>
                            <p><strong>Base Imponible:</strong> ${baseImponible}</p>
                            <p><strong>IVA: </strong> ${iva}</p>
                            <p><strong>Total Facturado: </strong> ${totalFacturado}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html; // Insertar HTML generado en el contenedor
    })
    .catch(error => console.error('Error:', error));
}


// 5
// Función para mostrar la facturación por producto en HTML
export function calculateProductInvoiceTotals() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order-detail/calculate-product-invoice-totals', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data'); // Contenedor HTML
        const point = document.querySelector('#point').textContent = "Product Invoice Totals"; // Punto de la consulta
        const statement = document.querySelector('#statement').textContent = "Returns the billing information grouped by product code, indicating the taxable base, the VAT, and the total invoiced."; // Descripción de la consulta
        
        let html = '';
        data.forEach(item => {
            const productCode = item[0];
            const baseImponible = item[1];
            const iva = item[2];
            const totalFacturado = item[3];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Product Code: ${productCode}</h1>
                            <br>
                            <h2>Base Imponible: <strong>${baseImponible}</strong></h2>
                            <h2>IVA: <strong>${iva}</strong></h2>
                            <h2>Total Facturado: <strong>${totalFacturado}</strong></h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html; // Insertar HTML generado en el contenedor
    })
    .catch(error => console.error('Error:', error));
}


// 6
// Función para mostrar la facturación por producto filtrada por códigos que empiecen por "OR" en HTML
export function calculateTotalByProductStartingWithOR() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order-detail/calculate-total-by-product-starting-with-o-r', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data'); // Contenedor HTML
        const point = document.querySelector('#point').textContent = "Product Invoice Totals (Starting with 'OR')"; // Punto de la consulta
        const statement = document.querySelector('#statement').textContent = "Returns the billing information grouped by product code, filtered by codes starting with 'OR', indicating the taxable base, the VAT, and the total invoiced."; // Descripción de la consulta
        
        let html = '';
        data.forEach(item => {
            const productCode = item[0];
            const baseImponible = item[1];
            const iva = item[2];
            const totalFacturado = item[3];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Product Code: ${productCode}</h1>
                            <br>
                            <h2>Base Imponible: <strong>${baseImponible}</strong></h2>
                            <h2>IVA: <strong>${iva}</strong></h2>
                            <h2>Total Facturado: <strong>${totalFacturado}</strong></h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html; // Insertar HTML generado en el contenedor
    })
    .catch(error => console.error('Error:', error));
}

// 7
// Función para mostrar la lista de ventas totales por producto en HTML
export function calculateTotalByProduct() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/order-detail/calculate-total-by-product', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data'); // Contenedor HTML
        const point = document.querySelector('#point').textContent = "Total Sales by Product"; // Punto de la consulta
        const statement = document.querySelector('#statement').textContent = "Lists the total sales of products that have billed more than 3000 euros. It shows the product name, units sold, total revenue, and total revenue with taxes (21% VAT)."; // Descripción de la consulta
        
        let html = '';
        data.forEach(item => {
            const productName = item[0];
            const unitsSold = item[1];
            const totalRevenue = item[2];
            const totalWithIVA = item[3];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Product Name: ${productName}</h1>
                            <br>
                            <h2>Units Sold: <strong>${unitsSold}</strong></h2>
                            <h2>Total Revenue: <strong>${totalRevenue}</strong></h2>
                            <h2>Total Revenue with VAT: <strong>${totalWithIVA}</strong></h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html; // Insertar HTML generado en el contenedor
    })
    .catch(error => console.error('Error:', error));
}

