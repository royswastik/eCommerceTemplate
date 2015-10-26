package com.swastikroy.shopb.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.dto.UserDetails;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.ElectronicRepository;
import com.swastikroy.shopb.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Resource
	private UserRepository userRepository;
	
	@Override
	public UserDetails add(UserDetails user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

	@Override
	public UserDetails delete(long user_id) throws ProductNotFound {
		// TODO Auto-generated method stub
		UserDetails deletedUser = userRepository.findOne((long)user_id);
		
		if (deletedUser == null)
			throw new ProductNotFound();
		
		userRepository.delete(deletedUser);
		return deletedUser;
	}

	@Override
	public List<UserDetails> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public UserDetails update(UserDetails user) throws ProductNotFound {
		// TODO Auto-generated method stub
		UserDetails user2 = userRepository.findOne(user.getUser_id());
		return userRepository.save(user2);
	}

	@Override
	public UserDetails findById(long user_id) {
		// TODO Auto-generated method stub
		return userRepository.findOne(user_id);
	}

	@Override
	public UserDetails findByName(String name) {
		// TODO Auto-generated method stub
		return userRepository.findAllByName(name);
	}

	@Override
	public UserDetails findByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findAllByEmail(email);
	}

}
