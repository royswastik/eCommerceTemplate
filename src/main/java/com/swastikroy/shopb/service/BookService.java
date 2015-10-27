package com.swastikroy.shopb.service;

import java.util.List;
import java.util.Map;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.exception.ProductNotFound;

public interface BookService {
	
	public Book create(Book Book);
	public Book delete(int id) throws ProductNotFound;
	public List<Book> findAll();
	public Map<Long,Book> findAllMap();
	public Book update(Book Book) throws ProductNotFound;
	public Book findById(int id);

}
