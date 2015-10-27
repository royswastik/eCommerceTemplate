package com.swastikroy.shopb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Sports;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.SportRepository;

@Service
public class SportServiceImpl implements SportService {

	@Resource
	private SportRepository shopRepository;

	@Override
	@Transactional
	public Sports create(Sports shop) {
		Sports createdSports = shop;
		return shopRepository.save(createdSports);
	}
	
	@Override
	@Transactional
	public Sports findById(int id) {
		return shopRepository.findOne((long)id);
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Sports delete(int id) throws ProductNotFound {
		Sports deletedSports = shopRepository.findOne((long)id);
		
		if (deletedSports == null)
			throw new ProductNotFound();
		
		shopRepository.delete(deletedSports);
		return deletedSports;
	}

	@Override
	@Transactional
	public List<Sports> findAll() {
		return shopRepository.findAll();
	}
	
	@Override
	public Map<Long, Sports> findAllMap() {
		// TODO Auto-generated method stub
		List<Sports> list1 = shopRepository.findAll();
		Map<Long,Sports> map1 = new HashMap<Long,Sports>();
		for (Sports i : list1) map1.put(i.getId(),i);
		return map1;
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Sports update(Sports shop) throws ProductNotFound {
		Sports updatedSports = shopRepository.findOne((long) shop.getId());
		
		if (updatedSports == null)
			throw new ProductNotFound();
		
		updatedSports.setName(shop.getName());
		updatedSports.setDescription(shop.getDescription());
		return updatedSports;
	}

	

}
