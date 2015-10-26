package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Cart;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface CartService {
	
	public Cart create(Cart cart);
	public Cart delete(long itemId, long userId,long categoryID) throws ProductNotFound;
	public List<Cart> findAll();
	public Map<String,Object> findAllForUser(long user_id);
	

     
}
