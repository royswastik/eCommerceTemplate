package com.swastikroy.shopb.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Categories;
import com.swastikroy.shopb.repository.CategoryRepository;
import com.swastikroy.shopb.repository.ElectronicRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Resource
	private CategoryRepository categoryRepository;
	
	@Override
	@Transactional
	public Categories findNameById(long category_id) {
		// TODO Auto-generated method stub
		return categoryRepository.findOne(category_id);
	}

	@Override
	public Categories findIdByName(String category_name) {
		// TODO Auto-generated method stub
		return categoryRepository.findIdByName(category_name);
	}

}
