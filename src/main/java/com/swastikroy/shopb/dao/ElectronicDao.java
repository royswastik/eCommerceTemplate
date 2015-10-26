package com.swastikroy.shopb.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.orm.hibernate4.HibernateTemplate;

import com.swastikroy.shopb.dto.Electronic;

public class ElectronicDao {
	HibernateTemplate template;  
	public void setTemplate(HibernateTemplate template) {  
	    this.template = template;  
	}  
	//method to save Electronic  
	public void saveElectronic(Electronic e){  
	    template.save(e);  
	}  
	//method to update Electronic  
	public void updateElectronic(Electronic e){  
	    template.update(e);  
	}  
	//method to delete Electronic  
	public void deleteElectronic(Electronic e){  
	    template.delete(e);  
	}  
	//method to return one Electronic of given id  
	public Electronic getById(int id){  
	    Electronic e=(Electronic)template.get(Electronic.class,id);  
	    return e;  
	}  
	//method to return all Electronics  
	public List<Electronic> getElectronics(){  
	    List<Electronic> list=new ArrayList<Electronic>();  
	    list=template.loadAll(Electronic.class);  
	    return list;  
	}  
}
