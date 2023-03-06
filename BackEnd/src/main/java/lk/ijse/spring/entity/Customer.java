package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String username;
    private String password;
    private String email;
    private String address;
    private String contact;
    private String D_licenseNumber;
    private String NIC_Number;
    private String Driving_NIC_file;
}
