
// 1

export function employeesByBossId7() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/employees-by-boss-id-7', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const point = document.querySelector('#point').textContent = "Employees";
        const statement = document.querySelector('#statement').textContent = "Returns a list with the first name, last name and email of the employees whose boss has a boss code equal to 7.";

		let html = '';
		data.forEach(data => {
			const name = data[0];
			const lastName1 = data[1];
            const lastName2 = data[2];
            const email = data[3];
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Employee</h1>
                            <br>
							<h2>${name}</h2>
							
							<li><strong>Last name: </strong> ${lastName1} ${lastName2}</li>	
							<li><strong>Email: </strong> ${email} </li>					

						</div>
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
export function getBossOfCompany() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/boss-of-company', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns the position name, name, last names, and email of the boss of the company.";

        let html = '';
        data.forEach(boss => {
            const positionName = boss[0];
            const name = boss[1];
            const lastName1 = boss[2];
            const lastName2 = boss[3];
            const email = boss[4];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>${positionName}</h1>
                            <br>
                            <h2>${name}</h2>
                            <li><strong>Last Name: </strong> ${lastName1} ${lastName2}</li>    
                            <li><strong>Email: </strong> ${email} </li>                    
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
export function findEmployeesNotSalesRepresentatives() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/employees-not-sales-representatives', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list with the name, last names, and position of employees who are not sales representatives.";

        let html = '';
        data.forEach(employee => {
            const name = employee[0];
            const lastName1 = employee[1];
            const position = employee[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>${position}</h1>
                            <br>
                            <h2>${name}</h2>
                            <li><strong>Last Name: </strong> ${lastName1}</li>    
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
export function findEmployeeAndBossNames() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/employee-and-boss-names', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list with the name of the employees along with the name of their bosses.";

        let html = '';
        data.forEach(entry => {
            const employeeName = entry[0];
            const bossName = entry[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee: ${employeeName}</h1>
                            <br>
                            <h2>Boss: ${bossName}</h2>
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
export function getAllEmployeesWithBossAndGrandBoss() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/with-boss-and-grandboss', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list showing the name of each employee, the name of their boss, and the name of their boss's boss.";

        let html = '';
        data.forEach(entry => {
            const employeeName = entry[0];
            const bossName = entry[1];
            const grandBossName = entry[2];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee: ${employeeName}</h1>
                            <br>
                            <h2>Boss: ${bossName}</h2>
                            <h3>Grandboss: ${grandBossName}</h3>
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
export function getEmployeesNotAssociatedOffice() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/employees-not-associated-office', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list of employees who are not associated with any office.";

        let html = '';
        data.forEach(employee => {
            const name = employee.name;
            const lastName1 = employee.lastName1;
            const lastName2 = employee.lastName2;
            const email = employee.email;
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee</h1>
                            <br>
                            <h2>${name}</h2>
                            <li><strong>Last Name: </strong> ${lastName1} ${lastName2}</li>    
                            <li><strong>Email: </strong> ${email}</li>    
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 7
export function getNonClientOfficeEmployeesWork() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/non-client-office-employees-work', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list of employees who do not have an associated client along with the data of the office where they work.";

        let html = '';
        data.forEach(employee => {
            const name = employee.name;
            const lastName1 = employee.lastName1;
            const lastName2 = employee.lastName2;
            const email = employee.email;
            const office = employee.office; // Verificar si el objeto office está definido
            const officeName = office ? office.name : 'N/A'; // Si office está definido, obtener su nombre, de lo contrario, establecer como 'N/A'
            const officeAddress = office ? office.address : 'N/A'; // Si office está definido, obtener su dirección, de lo contrario, establecer como 'N/A'
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee</h1>
                            <br>
                            <h2>${name}</h2>
                            <li><strong>Last Name: </strong> ${lastName1} ${lastName2}</li>    
                            <li><strong>Email: </strong> ${email}</li>
                            <br>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


// 8
export function getEmployeesDoNotHaveClients() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/employees-do-not-have-clients', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list with the names of employees who do not have associated clients.";

        let html = '';
        data.forEach(employee => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee</h1>
                            <br>
                            <h2>${employee.name}</h2>
                            <li><strong>Last Name: </strong> ${employee.lastName1} ${employee.lastName2}</li>    
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 9
export function getEmployeesNotAssociatedOfficeAndNotClient() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/employees-not-associated-office-and-not-client', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list with the names of employees who do not have an associated office or clients.";

        let html = '';
        data.forEach(employee => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee</h1>
                            <br>
                            <h2>${employee.name}</h2>
                            <li><strong>Last Name: </strong> ${employee.lastName1} ${employee.lastName2}</li>    
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 10
export function findEmployeesWithoutCustomers() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/find-employees-without-customers', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list with the names of employees who do not have associated customers and the name of their boss.";

        let html = '';
        data.forEach(entry => {
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee</h1>
                            <br>
                            <h2>${entry.name}</h2>
                            <li><strong>Last Name: </strong> ${entry.lastName1} ${entry.lastName2}</li>    
                            <li><strong>Boss Name: </strong> ${entry.bossCode}</li>    
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// 11
export function countEmployees() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/count-employees', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(count => {
        const countContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Displays the total number of employees in the company.";

        countContainer.innerHTML = `
        <div class="card">
            <div class="head">
                <div>
                <h1>Employee</h1>
                    <br>
                    <h2><strong>Total Employees:</strong> ${count}</h2>
                </div>
            </div>
        </div>
        
        
        `;
    })
    .catch(error => console.error('Error:', error));
}

// 12
export function countCustomersByEmployee() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/employee/count-customers-by-employee', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.querySelector('.info-data');
        const statement = document.querySelector('#statement').textContent = "Returns a list with the name of the sales representatives and the number of customers each one serves.";

        let html = '';
        data.forEach(entry => {
            const name = entry[0];
            const customerCount = entry[1];
            html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Sales Representative: ${name}</h1>
                            <br>
                            <h2>Number of Customers: ${customerCount}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

