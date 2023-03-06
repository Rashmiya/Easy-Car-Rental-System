package lk.ijse.spring.config;

import lk.ijse.spring.service.impl.CustomerServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({JPAConfig.class})/*import jpa configures related to dao layer */
@ComponentScan(basePackageClasses = {CustomerServiceImpl.class})  /*linked service layer configurations*/
public class WebRootConfig {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
