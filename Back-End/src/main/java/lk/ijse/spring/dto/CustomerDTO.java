package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String customerID;
    private UserDTO user;
    private LocalDate registeredDate;
    private String customerName;
    private String customerEmail;
    private String customerAddress;
    private String customerContact;
    private String custDrivingNumber;
    private String custNICNumber;
    private String Driving_NIC_Image;
}
