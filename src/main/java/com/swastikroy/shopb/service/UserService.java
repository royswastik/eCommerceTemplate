package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.dto.UserDetails;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface UserService {
	
	public UserDetails add(UserDetails user);
	public UserDetails delete(long user_id) throws ProductNotFound;
	public List<UserDetails> findAll();
	public UserDetails update(UserDetails user) throws ProductNotFound;
	public UserDetails findById(long user_id);
	public UserDetails findByEmail(String email);
	public UserDetails findByName(String name);
}
