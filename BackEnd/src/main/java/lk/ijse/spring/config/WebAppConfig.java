package lk.ijse.spring.config;

import lk.ijse.spring.advisor.AppWideExceptionHandler;
import lk.ijse.spring.controller.CustomerController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
/*@ComponentScan(basePackages = "lk.ijse.spring")*/
@ComponentScan(basePackageClasses = {CustomerController.class, AppWideExceptionHandler.class})
@EnableWebMvc
public class WebAppConfig {
}
