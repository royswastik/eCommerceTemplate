package com.swastikroy.shopb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.ElectronicRepository;

@Service
public class ElectronicServiceImpl implements ElectronicService {

	@Resource
	private ElectronicRepository shopRepository;

	@Override
	@Transactional
	public Electronic create(Electronic shop) {
		Electronic createdElectronic = shop;
		return shopRepository.save(createdElectronic);
	}
	
	@Override
	@Transactional
	public Electronic findById(int id) {
		return shopRepository.findOne((long)id);
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Electronic delete(int id) throws ProductNotFound {
		Electronic deletedElectronic = shopRepository.findOne((long)id);
		
		if (deletedElectronic == null)
			throw new ProductNotFound();
		
		shopRepository.delete(deletedElectronic);
		return deletedElectronic;
	}

	@Override
	@Transactional
	public List<Electronic> findAll() {
		return shopRepository.findAll();
	}
	
	@Override
	public Map<Long, Electronic> findAllMap() {
		// TODO Auto-generated method stub
		List<Electronic> list1 = shopRepository.findAll();
		Map<Long,Electronic> map1 = new HashMap<Long,Electronic>();
		for (Electronic i : list1) map1.put(i.getId(),i);
		return map1;
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Electronic update(Electronic shop) throws ProductNotFound {
		Electronic updatedElectronic = shopRepository.findOne((long) shop.getId());
		
		if (updatedElectronic == null)
			throw new ProductNotFound();
		
		updatedElectronic.setName(shop.getName());
		updatedElectronic.setDescription(shop.getDescription());
		return updatedElectronic;
	}

	

}
