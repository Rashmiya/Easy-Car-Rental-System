package lk.ijse.spring.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories(basePackages = "lk.ijse.spring.repo")
@EnableTransactionManagement
@PropertySource("classpath:application.properties")

public class JPAConfig {
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(){
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();

        /*add Entity class location*/
        /*add DataSource*/
        /*add VendorAdapt*/

        return bean;
    }

    /*create DataSource return typed @Bean method
    * ---DriveManager
    * ---setDriver class name
    * ---URLfor database
    * ---set userName
    * ---set Password*/

    /*create JpaVendorAdapter return typed @Bean method
    * ---create object in HibernateJpaVendorAdaptor
    * ---set database platform
    * ---set databse
    * --- set generate Ddl
    * --- set show sql*/

    /*create PlatformTransactionManager return typed @Bean method
    * ---*/
}
