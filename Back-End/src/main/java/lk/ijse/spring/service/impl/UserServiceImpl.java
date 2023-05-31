package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.UserRepo;
import lk.ijse.spring.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo user_repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveUser(UserDTO user) {

    }

    @Override
    public void updateUser(UserDTO user) {

    }

    @Override
    public void deleteUser(String id) {

    }

    @Override
    public UserDTO searchUser(String id) {
        return null;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return null;
    }

    @Override
    public String generateUserIds() {
        return null;
    }

    @Override
    public UserDTO findByUserName(String userName) {
        return null;
    }

    @Override
    public UserDTO findByPasswordAndUserName(String password, String userName) {
        return null;
    }
}
