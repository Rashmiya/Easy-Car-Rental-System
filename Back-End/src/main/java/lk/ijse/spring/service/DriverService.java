package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO driver);
    void updateDriver(DriverDTO driver);
    void deleteDriver(String id);
    DriverDTO searchDriver(String id);
    List<DriverDTO> getAllDrivers();

    String generateDriverIds();

    DriverDTO assignRandomDriver(String status);
    List<DriverDTO> searchDriverStatus(String status);

    DriverDTO searchUserFromDriver(String id);
    int availableDrivers(String status);
}
