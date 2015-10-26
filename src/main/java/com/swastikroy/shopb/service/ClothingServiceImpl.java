package com.swastikroy.shopb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Clothing;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.ClothingRepository;

@Service
public class ClothingServiceImpl implements ClothingService {

	@Resource
	private ClothingRepository shopRepository;

	@Override
	@Transactional
	public Clothing create(Clothing shop) {
		Clothing createdClothing = shop;
		return shopRepository.save(createdClothing);
	}
	
	@Override
	@Transactional
	public Clothing findById(int id) {
		return shopRepository.findOne((long)id);
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Clothing delete(int id) throws ProductNotFound {
		Clothing deletedClothing = shopRepository.findOne((long)id);
		
		if (deletedClothing == null)
			throw new ProductNotFound();
		
		shopRepository.delete(deletedClothing);
		return deletedClothing;
	}

	@Override
	@Transactional
	public List<Clothing> findAll() {
		return shopRepository.findAll();
	}
	
	@Override
	public Map<Long, Clothing> findAllMap() {
		// TODO Auto-generated method stub
		List<Clothing> list1 = shopRepository.findAll();
		Map<Long,Clothing> map1 = new HashMap<Long,Clothing>();
		for (Clothing i : list1) map1.put(i.getId(),i);
		return map1;
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Clothing update(Clothing shop) throws ProductNotFound {
		Clothing updatedClothing = shopRepository.findOne((long) shop.getId());
		
		if (updatedClothing == null)
			throw new ProductNotFound();
		
		updatedClothing.setName(shop.getName());
		updatedClothing.setDescription(shop.getDescription());
		return updatedClothing;
	}

	

}
