package jadineria.jardineraDelEden.web.controller;

import jadineria.jardineraDelEden.domain.service.CustomerServiceImpl;
import jadineria.jardineraDelEden.persistence.Customer;
import jadineria.jardineraDelEden.persistence.dtos.CustomerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customers")
@CrossOrigin("*")
public class CustomerController {
    private final CustomerServiceImpl customerService;

    @Autowired
    public CustomerController(CustomerServiceImpl customerService) {
        this.customerService = customerService;
    }


    @GetMapping
    public List<CustomerDTO> getAllCustomers() {
        return customerService.getAll();
    }

 // 6.
    @GetMapping("/spanish-customers")
    public List<String> getSpanishCustomers() {
     return customerService.findSpanishCustomers();
 }
    // Endpoint corregido para la consulta 16
    @GetMapping("/madrid-sales-rep-11-30")
    public ResponseEntity<List<Object[]>>getCustomersInMadridWithSalesRepCode11Or30() {
        return ResponseEntity.ok(customerService.findCustomersInMadridWithSalesRepCode11Or30());
    }
      // Endpoint para la consulta 17
    @GetMapping("/customer-salesrep")
    public ResponseEntity<List<Object[]>> getCustomerNameAndSalesRepName() {
        return ResponseEntity.ok(customerService.findCustomerNameAndSalesRepName());
    }

    // Endpoint para la consulta 18
    @GetMapping("/customers-with-payments")
    public ResponseEntity<List<Object[]>> getCustomersWithPaymentsAndSalesRepName() {
        return ResponseEntity.ok(customerService.findCustomersWithPaymentsAndSalesRep());
    }
    
    // Endpoint para la consulta 19
    @GetMapping("/customers-without-payments")
    public ResponseEntity<List<Object[]>> getCustomersWithoutPaymentsAndSalesRepName() {
        return ResponseEntity.ok(customerService.findCustomersWithoutPaymentsAndSalesRep());
    }
    
    // Endpoint para la consulta 20
    @GetMapping("/customers-with-payments-rep-city")
    public ResponseEntity<List<Object[]>> getCustomersWithPaymentsAndSalesRepAndOfficeCity() {
        return ResponseEntity.ok(customerService.findCustomersWithPaymentsAndSalesRepWithOfficeCity());
    }
    // Consulta 21 - Clientes sin pagos realizados
    @GetMapping("/without-payments")
    public List<Object[]> getCustomersWithoutPayments() {
        return customerService.findCustomersWithoutPayments();
    }

    // Consulta 23 - Clientes distintos con representante de ventas y oficina
    @GetMapping("/distinct-customer-representative-office")
    public List<Object[]> getDistinctCustomerRepresentativeOffice() {
        return customerService.findDistinctCustomerRepresentativeOffice();
    }

    @GetMapping("/customers-do-not-pay-any-orders")
    public List<CustomerDTO> customersDoNotPayAnyOrders(){
        return customerService.getCustomersDoNotPayAnyOrders();
    }

    @GetMapping("/find-customers-with-orders-but-no-payments")
    public List<CustomerDTO> findCustomersWithOrdersButNoPayments(){
        return customerService.findCustomersWithOrdersButNoPayments();
    }

    @GetMapping("/count-customers-by-country")
    public List<Object[]> countCustomersByCountry(){
        return customerService.countCustomersByCountry();
    }

    @GetMapping("/count-customer")
    public Long countCustomer(){
        return customerService.countCustomer();
    }

    @GetMapping("/count-customers-by-city-madrid")
    public Long countCustomersByCityMadrid(){
        return customerService.countCustomersByCityMadrid();
    }

    @GetMapping("/count-customers-by-city-starting-with-m")
    public List<Object[]> countCustomersByCityStartingWithM(){
        return customerService.countCustomersByCityStartingWithM();
    }

    @GetMapping("/count-customers-with-no-sales-representative")
    public Long countCustomersWithNoSalesRepresentative(){
        return customerService.countCustomersWithNoSalesRepresentative();
    }

    @GetMapping("/find-min-max-payment-dates-by-customer")
    public List<Object[]> findMinMaxPaymentDatesByCustomer(){
        return customerService.findMinMaxPaymentDatesByCustomer();
    }
}
