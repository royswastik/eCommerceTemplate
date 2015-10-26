package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Sports;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface SportService {
	
	public Sports create(Sports Sport);
	public Sports delete(int id) throws ProductNotFound;
	public List<Sports> findAll();
	public Map<Long,Sports> findAllMap();
	public Sports update(Sports Sport) throws ProductNotFound;
	public Sports findById(int id);

}
