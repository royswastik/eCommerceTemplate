package com.swastikroy.shopb.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Cart;
import com.swastikroy.shopb.dto.Categories;
import com.swastikroy.shopb.dto.UserDetails;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.service.BookService;
import com.swastikroy.shopb.service.CartService;
import com.swastikroy.shopb.service.CategoryService;
import com.swastikroy.shopb.validation.BookValidator;


@RestController
public class CartController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private CartService cartService;
    @Autowired
	private CategoryService categoryService;

    @RequestMapping(value="/getCartForUser", method=RequestMethod.POST)
	public Map<String,Object> getCartForUser(@RequestParam(value="user_id", defaultValue="1") int user_id) {
		Map<String,Object> shopList = cartService.findAllForUser((long)user_id);
		return shopList;
	}
    
    @RequestMapping(value="/addCartItemForUser", method=RequestMethod.POST)
	public Cart addCartItemForUser(HttpServletRequest request,@RequestParam(value="item_id", defaultValue="1") int item_id, @RequestParam(value="category_name", defaultValue="electronics") String category_name) {
	//	String category_name = categoryService.findNameById(category_id).getCategoryName();\
    	System.out.println(item_id+category_name);
    	UserDetails user0 = (UserDetails) request.getSession().getAttribute("logged_user");
    	System.out.println(user0.getUser_id());
    	long user_id = (long)user0.getUser_id();
    	Categories cat = categoryService.findIdByName(category_name);
    	System.out.println(cat.getId() + cat.getCategoryName());
		long categoryID = (long)cat.getId();
		System.out.println("cat:" +categoryID);
    	Cart cart_new = new Cart();
		cart_new.setItem_id(item_id);
		cart_new.setUser_id(user_id);
		cart_new.setCategory_id(categoryID);
		System.out.println("User:" +user_id);
    	Cart e1 = cartService.create(cart_new);
    	System.out.println("cat3:" +categoryID);
		return e1;
	}
    
    @RequestMapping(value="/deleteCartItemForUser", method=RequestMethod.POST)
	public Cart deleteCartItemForUser(HttpServletRequest request,@RequestParam(value="item_id", defaultValue="1") int item_id,@RequestParam(value="category_name", defaultValue="electronics") String category_name) throws ProductNotFound {
    	System.out.println(item_id+category_name);
    	UserDetails user0 = (UserDetails) request.getSession().getAttribute("logged_user");
    	long user_id = (long)user0.getUser_id();
    	Categories cat = categoryService.findIdByName(category_name);
		long categoryID = (long)cat.getId();
    	Cart e1 = cartService.delete(item_id,user_id,categoryID);
		return e1;
	}
   
   
    
}