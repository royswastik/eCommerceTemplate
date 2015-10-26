package com.swastikroy.shopb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Music;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.MusicRepository;

@Service
public class MusicServiceImpl implements MusicService {

	@Resource
	private MusicRepository shopRepository;

	@Override
	@Transactional
	public Music create(Music shop) {
		Music createdMusic = shop;
		return shopRepository.save(createdMusic);
	}
	
	@Override
	@Transactional
	public Music findById(int id) {
		return shopRepository.findOne((long)id);
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Music delete(int id) throws ProductNotFound {
		Music deletedMusic = shopRepository.findOne((long)id);
		
		if (deletedMusic == null)
			throw new ProductNotFound();
		
		shopRepository.delete(deletedMusic);
		return deletedMusic;
	}

	@Override
	@Transactional
	public List<Music> findAll() {
		return shopRepository.findAll();
	}
	
	@Override
	public Map<Long, Music> findAllMap() {
		// TODO Auto-generated method stub
		List<Music> list1 = shopRepository.findAll();
		Map<Long,Music> map1 = new HashMap<Long,Music>();
		for (Music i : list1) map1.put(i.getId(),i);
		return map1;
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Music update(Music shop) throws ProductNotFound {
		Music updatedMusic = shopRepository.findOne((long) shop.getId());
		
		if (updatedMusic == null)
			throw new ProductNotFound();
		
		updatedMusic.setName(shop.getName());
		updatedMusic.setDescription(shop.getDescription());
		return updatedMusic;
	}

	

}
