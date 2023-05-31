package lk.ijse.spring.service;

import lk.ijse.spring.dto.UserDTO;

import java.util.List;

public interface UserService {
    void saveUser(UserDTO user);
    void updateUser(UserDTO user);
    void deleteUser(String id);
    UserDTO searchUser(String id);
    List<UserDTO> getAllUsers();

    String generateUserIds();
    UserDTO findByUserName(String userName);
    UserDTO findByPasswordAndUserName(String password, String userName);

}
