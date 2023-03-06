package lk.ijse.spring.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(basePackages = "lk.ijse.spring.repo")
@EnableTransactionManagement
@PropertySource("classpath:application.properties")

public class JPAConfig {

    @Autowired
    Environment env;

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource, JpaVendorAdapter vendorAdapter){
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();

        /*add Entity class location*/
        /*add DataSource*/
        /*add VendorAdapt*/
        bean.setJpaVendorAdapter(vendorAdapter);
        bean.setDataSource(dataSource);
        bean.setPackagesToScan(env.getRequiredProperty("entity.package.name"));
        return bean;
    }

    /*create DataSource return typed @Bean method
    * ---DriveManager
    * ---setDriver class name
    * ---URLfor database
    * ---set userName
    * ---set Password*/

    @Bean
    public DataSource dataSource() throws NamingException {
        DriverManagerDataSource datasource = new DriverManagerDataSource();
        datasource.setUrl(env.getRequiredProperty("my.app.url"));
        datasource.setUsername(env.getRequiredProperty("my.app.username"));
        datasource.setPassword(env.getRequiredProperty("my.app.password"));
        datasource.setDriverClassName(env.getRequiredProperty("my.app.driverClassname"));
        return datasource;
    }

    /*create JpaVendorAdapter return typed @Bean method
    * ---create object in HibernateJpaVendorAdaptor
    * ---set database platform
    * ---set databse
    * --- set generate Ddl
    * --- set show sql*/
    @Bean
    public JpaVendorAdapter jpaVendorAdapter(){
        HibernateJpaVendorAdapter vendor=new HibernateJpaVendorAdapter();
        vendor.setDatabasePlatform(env.getRequiredProperty("my.app.dialect"));
        vendor.setDatabase(Database.MYSQL);
        vendor.setShowSql(true);
        vendor.setGenerateDdl(true);
        return vendor;
    }

    /*create PlatformTransactionManager return typed @Bean method
    * ---*/
    @Bean
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf){
        return new JpaTransactionManager(emf);
    }
}
