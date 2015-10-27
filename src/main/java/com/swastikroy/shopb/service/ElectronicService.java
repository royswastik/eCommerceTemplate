package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface ElectronicService {
	
	public Electronic create(Electronic Electronic);
	public Electronic delete(int id) throws ProductNotFound;
	public List<Electronic> findAll();
	public Map<Long,Electronic> findAllMap();
	public Electronic update(Electronic Electronic) throws ProductNotFound;
	public Electronic findById(int id);

}
