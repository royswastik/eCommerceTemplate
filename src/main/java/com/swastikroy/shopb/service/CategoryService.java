package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Cart;
import com.swastikroy.shopb.dto.Categories;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface CategoryService {
	
	public Categories findNameById(long category_id);
	public Categories findIdByName(String category_name);
}