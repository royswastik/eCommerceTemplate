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

import com.swastikroy.shopb.dto.Clothing;
import com.swastikroy.shopb.service.ClothingService;



@RestController
public class ClothingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private ClothingService clothingService;
	
	
	

    @RequestMapping(value="/listclothing", method=RequestMethod.GET)
	public List<Clothing> shopListPage() {
		List<Clothing> shopList = clothingService.findAll();
		return shopList;
	}
    @RequestMapping(value="/clothingAll", method=RequestMethod.POST)
	public Map<Long,Clothing> shopListPage2() {
		Map<Long,Clothing> shopList = clothingService.findAllMap();
		return shopList;
	}
    
    @RequestMapping(value="/addClothing", method=RequestMethod.POST)
	public Clothing addClothing(Clothing elec1) {
		Clothing e1 = clothingService.create(elec1);
		return e1;
	}
   
    
}