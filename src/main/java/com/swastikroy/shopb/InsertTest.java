package com.swastikroy.shopb;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.swastikroy.shopb.dao.ElectronicDao;
import com.swastikroy.shopb.dto.Electronic;

public class InsertTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext appContext = 
	      	  new ClassPathXmlApplicationContext("applicationContext.xml");
	  	
	    ElectronicDao dao = (ElectronicDao)appContext.getBean("d");
	/*	Resource r=new ClassPathResource("applicationContext.xml");  
	    BeanFactory factory=new XmlBeanFactory(r);  
	      
	    ElectronicDao dao=(ElectronicDao)factory.getBean("d");  */
	      
	    Electronic e= new Electronic(115,"vasdasra3sdun","asda3s");  

	    System.out.println("Hello1");
	    dao.saveElectronic(e);  
	    System.out.println("Hello2");
	}

}
