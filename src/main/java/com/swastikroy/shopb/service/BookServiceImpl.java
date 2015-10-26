package com.swastikroy.shopb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Resource
	private BookRepository shopRepository;

	@Override
	@Transactional
	public Book create(Book shop) {
		Book createdBook = shop;
		return shopRepository.save(createdBook);
	}
	
	@Override
	@Transactional
	public Book findById(int id) {
		return shopRepository.findOne((long)id);
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Book delete(int id) throws ProductNotFound {
		Book deletedBook = shopRepository.findOne((long)id);
		
		if (deletedBook == null)
			throw new ProductNotFound();
		
		shopRepository.delete(deletedBook);
		return deletedBook;
	}

	@Override
	@Transactional
	public List<Book> findAll() {
		return shopRepository.findAll();
	}
	
	@Override
	public Map<Long, Book> findAllMap() {
		// TODO Auto-generated method stub
		List<Book> list1 = shopRepository.findAll();
		Map<Long,Book> map1 = new HashMap<Long,Book>();
		for (Book i : list1) map1.put(i.getId(),i);
		return map1;
	}

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Book update(Book shop) throws ProductNotFound {
		Book updatedBook = shopRepository.findOne((long) shop.getId());
		
		if (updatedBook == null)
			throw new ProductNotFound();
		
		updatedBook.setName(shop.getName());
		updatedBook.setDescription(shop.getDescription());
		return updatedBook;
	}

	

}
