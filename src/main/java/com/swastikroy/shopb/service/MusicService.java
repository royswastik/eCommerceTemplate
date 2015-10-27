package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Music;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface MusicService {
	
	public Music create(Music Music);
	public Music delete(int id) throws ProductNotFound;
	public List<Music> findAll();
	public Map<Long,Music> findAllMap();
	public Music update(Music Music) throws ProductNotFound;
	public Music findById(int id);

}
