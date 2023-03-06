package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil(200,"Ok",customerService.getAllCustomer());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO dto) {
        customerService.saveCustomer(dto);
       /* System.out.println("customer1");*/
        System.out.println(dto);
        return new ResponseUtil(200,"Save",null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO dto) {
        customerService.updateCustomer(dto);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"username"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String username) {
        customerService.deleteCustomer(username);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{username}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String username) {
        return new ResponseUtil(200,"Ok",customerService.searchCustomer(username));
    }

    @GetMapping(params = {"username","password"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil checkCustomer(@RequestParam String username,@RequestParam String password) {
        return new ResponseUtil(200,"Ok",customerService.checkCustomer(username,password));
    }
}
