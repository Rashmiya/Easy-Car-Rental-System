package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Driver {
    @Id
    private String driver_ID;
    private String driver_name;
    private String driver_Address;
    private String driver_contact;
    private String status;

    /*customer and driver has one to one relationship*/
    @OneToOne(cascade = CascadeType.ALL)
    private User user;
}
