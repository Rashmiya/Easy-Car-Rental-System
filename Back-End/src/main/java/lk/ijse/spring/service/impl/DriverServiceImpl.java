package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
     DriverRepo driver_repo;
    @Autowired
     ModelMapper mapper;

    @Override
    public void saveDriver(DriverDTO driver) {

    }

    @Override
    public void updateDriver(DriverDTO driver) {

    }

    @Override
    public void deleteDriver(String id) {

    }

    @Override
    public DriverDTO searchDriver(String id) {
        return null;
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return null;
    }

    @Override
    public String generateDriverIds() {
        return null;
    }

    @Override
    public DriverDTO assignRandomDriver(String status) {
        return null;
    }

    @Override
    public List<DriverDTO> searchDriverStatus(String status) {
        return null;
    }

    @Override
    public DriverDTO searchUserFromDriver(String id) {
        return null;
    }

    @Override
    public int availableDrivers(String status) {
        return 0;
    }
}
