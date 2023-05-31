package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driver_ID;
    private String driver_name;
    private String driver_Address;
    private String driver_contact;
    private String status;

    private UserDTO user;
}
