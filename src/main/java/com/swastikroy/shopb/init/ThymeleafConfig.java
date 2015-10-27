package com.swastikroy.shopb.init;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.ViewResolver;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.spring4.view.ThymeleafViewResolver;
import org.thymeleaf.templateresolver.ServletContextTemplateResolver;
import org.thymeleaf.templateresolver.TemplateResolver;

//@Configuration
//@PropertySource("classpath:thymeleaf.properties")
public class ThymeleafConfig {
 
 
 //   @Bean
    public TemplateResolver templateResolver(){
        ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver();
        templateResolver.setPrefix("");
        templateResolver.setSuffix("");
        templateResolver.setTemplateMode("HTML5");
 
        return templateResolver;
    }
 
  //  @Bean
    public SpringTemplateEngine templateEngine(){
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver());
        return templateEngine;
    }
 
  //  @Bean
    public ViewResolver viewResolver(){
        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver() ;
        viewResolver.setTemplateEngine(templateEngine());
        viewResolver.setOrder(1);
        String[] viewNames = new String[3];
      /*  viewNames[0] = "templates/*";
        viewNames[1] = "resources/*";
        viewNames[2] = "/*";*/
        viewResolver.setViewNames(viewNames);
        return viewResolver;
    }
}