package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void saveCustomer(CustomerDTO dto);

    void deleteCustomer(String id);

    void updateCustomer(CustomerDTO dto);

    CustomerDTO searchCustomer(String id);

    boolean checkCustomer(String username,String password);

    List<CustomerDTO> getAllCustomer();
}
