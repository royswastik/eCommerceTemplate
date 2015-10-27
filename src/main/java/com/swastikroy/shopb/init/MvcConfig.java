package com.swastikroy.shopb.init;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
    	registry.addViewController("/index").setViewName("/resources/templates/index.html");
    	registry.addViewController("/index2").setViewName("shoppingbee_Swastik/html/home");
    	registry.addViewController("/index3").setViewName("index.html");
        registry.addViewController("/home").setViewName("shoppingbee_Swastik/html/home");
        registry.addViewController("/").setViewName("shoppingbee_Swastik/html/home");
        registry.addViewController("/catalog").setViewName("shoppingbee_Swastik/html/catalog");
        registry.addViewController("/cart").setViewName("shoppingbee_Swastik/html/cart");
        registry.addViewController("/login").setViewName("shoppingbee_Swastik/html/landing");
        registry.addViewController("/landing").setViewName("shoppingbee_Swastik/html/landing");
        registry.addViewController("/signin").setViewName("shoppingbee_Swastik/html/landing");
        registry.addViewController("/product-details").setViewName("shoppingbee_Swastik/html/product-details");
        registry.addViewController("/signup").setViewName("shoppingbee_Swastik/html/signup");
        registry.addViewController("/register").setViewName("shoppingbee_Swastik/html/signup");
        registry.addViewController("/about").setViewName("shoppingbee_Swastik/html/about");
        registry.addViewController("/billing").setViewName("shoppingbee_Swastik/html/billing");
        registry.addViewController("/careers").setViewName("shoppingbee_Swastik/html/careers");
        registry.addViewController("/terms").setViewName("shoppingbee_Swastik/html/terms");
        registry.addViewController("/trackOrder").setViewName("shoppingbee_Swastik/html/trackOrder");
        registry.addViewController("/contactus").setViewName("shoppingbee_Swastik/html/contactus");
        registry.addViewController("/faq").setViewName("shoppingbee_Swastik/html/faq");
        registry.addViewController("/privacy").setViewName("shoppingbee_Swastik/html/privacy");

    }
    
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
        registry.addResourceHandler("/static/css/**").addResourceLocations("/resources/shoppingbee_Swastik/css/");
    	registry.addResourceHandler("/static/img/**").addResourceLocations("/resources/shoppingbee_Swastik/img/");
    	registry.addResourceHandler("/static/js/**").addResourceLocations("/resources/shoppingbee_Swastik/js/");
    	registry.addResourceHandler("/static/fonts/**").addResourceLocations("/resources/shoppingbee_Swastik/fonts/");
    	registry.addResourceHandler("/**").addResourceLocations("/resources/shoppingbee_Swastik/html/");
    }
    
 
}
