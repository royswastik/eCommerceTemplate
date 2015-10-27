package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Furniture;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface FurnitureService {
	
	public Furniture create(Furniture Furniture);
	public Furniture delete(int id) throws ProductNotFound;
	public List<Furniture> findAll();
	public Map<Long,Furniture> findAllMap();
	public Furniture update(Furniture Furniture) throws ProductNotFound;
	public Furniture findById(int id);

}
