package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getUsername())) {
            throw new RuntimeException("Customer "+dto.getUsername()+" Already Exist..!");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

    @Override
    public void deleteCustomer(String userName) {
        if (!repo.existsById(userName)){
            throw new RuntimeException("Customer "+userName+" Not Available to Delete..!, Please Check Again");
        }
        repo.deleteById(userName);
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (!repo.existsById(dto.getUsername())){
            throw new RuntimeException("Customer "+dto.getUsername()+" Not Available to Update..!");
        }
        repo.save( mapper.map(dto, Customer.class));
    }

    @Override
    public CustomerDTO searchCustomer(String username) {
        if (repo.existsById(username)) {
            Customer customer = repo.findById(username).get();
            CustomerDTO map = mapper.map(customer, CustomerDTO.class);
            return map;
        } else {
            throw new RuntimeException(username+ " not available customer");
        }
    }

    @Override
    public boolean checkCustomer(String username, String password) {
        return  repo.existsByUsernameAndPassword(username,password);
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {}.getType());
    }
}
