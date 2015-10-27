package com.swastikroy.shopb.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.service.BookService;
import com.swastikroy.shopb.validation.BookValidator;


@RestController
public class BookController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private BookService bookService;
	
	@Autowired
	private BookValidator shopValidator;
	
	@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(shopValidator);
	}

    @RequestMapping(value="/listbooks", method=RequestMethod.GET)
	public List<Book> shopListPage() {
		List<Book> shopList = bookService.findAll();
		return shopList;
	}
    @RequestMapping(value="/booksAll", method=RequestMethod.POST)
	public Map<Long,Book> shopListPage2() {
		Map<Long,Book> shopList = bookService.findAllMap();
		return shopList;
	}
    
    @RequestMapping(value="/addBook", method=RequestMethod.POST)
	public Book addBook(Book elec1) {
		Book e1 = bookService.create(elec1);
		return e1;
	}
   
    
}