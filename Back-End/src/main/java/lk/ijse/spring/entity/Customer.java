package lk.ijse.spring.entity;

import jdk.nashorn.internal.ir.annotations.Ignore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String customerID;
    private LocalDate registeredDate;
    private String customerName;
    private String custPassword;
    private String customerEmail;
    private String customerAddress;
    private String customerContact;
    private String custDrivingNumber;
    private String custNICNumber;
    private String Driving_NIC_Image;
}
