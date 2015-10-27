package com.swastikroy.shopb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Furniture;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.FurnitureRepository;

@Service
public class FurnitureServiceImpl implements FurnitureService {

	@Resource
	private FurnitureRepository shopRepository;

	@Override
	@Transactional
	public Furniture create(Furniture shop) {
		Furniture createdFurniture = shop;
		return shopRepository.save(createdFurniture);
	}
	
	@Override
	@Transactional
	public Furniture findById(int id) {
		return shopRepository.findOne((long)id);
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Furniture delete(int id) throws ProductNotFound {
		Furniture deletedFurniture = shopRepository.findOne((long)id);
		
		if (deletedFurniture == null)
			throw new ProductNotFound();
		
		shopRepository.delete(deletedFurniture);
		return deletedFurniture;
	}

	@Override
	@Transactional
	public List<Furniture> findAll() {
		return shopRepository.findAll();
	}
	
	@Override
	public Map<Long, Furniture> findAllMap() {
		// TODO Auto-generated method stub
		List<Furniture> list1 = shopRepository.findAll();
		Map<Long,Furniture> map1 = new HashMap<Long,Furniture>();
		for (Furniture i : list1) map1.put(i.getId(),i);
		return map1;
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Furniture update(Furniture shop) throws ProductNotFound {
		Furniture updatedFurniture = shopRepository.findOne((long) shop.getId());
		
		if (updatedFurniture == null)
			throw new ProductNotFound();
		
		updatedFurniture.setName(shop.getName());
		updatedFurniture.setDescription(shop.getDescription());
		return updatedFurniture;
	}

	

}
