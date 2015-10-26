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

import com.swastikroy.shopb.dto.Furniture;
import com.swastikroy.shopb.service.FurnitureService;



@RestController
public class FurnitureController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private FurnitureService furnitureService;
	
	
	

    @RequestMapping(value="/listfurniture", method=RequestMethod.GET)
	public List<Furniture> shopListPage() {
		List<Furniture> shopList = furnitureService.findAll();
		return shopList;
	}
    @RequestMapping(value="/furnitureAll", method=RequestMethod.POST)
	public Map<Long,Furniture> shopListPage2() {
		Map<Long,Furniture> shopList = furnitureService.findAllMap();
		return shopList;
	}
    
    @RequestMapping(value="/addFurniture", method=RequestMethod.POST)
	public Furniture addFurniture(Furniture elec1) {
		Furniture e1 = furnitureService.create(elec1);
		return e1;
	}
   
    
}