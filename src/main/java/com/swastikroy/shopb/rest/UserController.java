package com.swastikroy.shopb.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.dto.UserDetails;
import com.swastikroy.shopb.service.BookService;
import com.swastikroy.shopb.service.UserService;
import com.swastikroy.shopb.validation.BookValidator;


@RestController
public class UserController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private BookService bookService;
    
    @Autowired
	private UserService userService;
	
	@Autowired
	private BookValidator shopValidator;
	
	@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(shopValidator);
	}

    @RequestMapping(value="/loginCheck", method=RequestMethod.POST)
	public Map<String,Object> loginCheck(HttpServletRequest request) {
    	Map<String,Object> map = new HashMap<String,Object>();
		if(request.getSession(false) != null)
		{	
			map.put("isLoggedIn", true);
			map.put("user", request.getSession(false).getAttribute("logged_user"));
			return map;
		}
		else 
		{
			map.put("isLoggedIn", false);
			map.put("user", null);
			return map;
		}
	}
    
    @RequestMapping(value="/logOut")
	public ModelAndView logOut(HttpServletResponse response,HttpServletRequest request) {
    	request.getSession(false).invalidate();
    	ModelAndView mav = new ModelAndView("forward:/home");
		return mav;
	}
    @RequestMapping(value="/setLogin", method=RequestMethod.POST)
	public String shopListPage2(@RequestParam(value="uname", defaultValue="swastik") String uname, @RequestParam(value="password", defaultValue="password") String password,
			HttpServletResponse response,HttpServletRequest request) {
    	System.out.println("Uname:" + password);
    	UserDetails u1 = userService.findByName(uname);
    	if(u1 == null){
    		return "username doesn't exist";
    	}
    	else if(!u1.getPassword().equals(password)){
    		System.out.println(u1.getPassword());
    		return "password doesn't match";
    	}
    	else{
    		request.getSession().setAttribute("logged_user", u1);
    		return "login successful";
    	}
	}
    
    @RequestMapping(value="/addUser", method=RequestMethod.POST)
	public String addBook(@RequestParam(value="name", defaultValue="swastik") String name,@RequestParam(value="password", defaultValue="password") String password,
			@RequestParam(value="email", defaultValue="email") String email,
			@RequestParam(value="phone", defaultValue="123456") String phone,
			@RequestParam(value="description", defaultValue="swastikasdas asdd ") String description){
    	UserDetails userNew = new UserDetails();
    	userNew.setName(name);
    	userNew.setPassword(password);
    	userNew.setPhone(phone);
    	userNew.setDescription(description);
    	userNew.setEmail(email);
    	UserDetails u0 = userService.findByName(name);
    	if(u0 != null){
    		return "Username already exists";
    	}
    	else{
    		UserDetails u1 = userService.add(userNew);
    		return "Sign up successful";
    	}
		
	}
}