package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Clothing;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface ClothingService {
	
	public Clothing create(Clothing Clothing);
	public Clothing delete(int id) throws ProductNotFound;
	public List<Clothing> findAll();
	public Map<Long,Clothing> findAllMap();
	public Clothing update(Clothing Clothing) throws ProductNotFound;
	public Clothing findById(int id);

}
