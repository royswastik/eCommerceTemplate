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

import com.swastikroy.shopb.dto.Sports;
import com.swastikroy.shopb.service.SportService;



@RestController
public class SportController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private SportService sportService;
	
	
	

    @RequestMapping(value="/listsports", method=RequestMethod.GET)
	public List<Sports> shopListPage() {
		List<Sports> shopList = sportService.findAll();
		return shopList;
	}
    @RequestMapping(value="/sportsAll", method=RequestMethod.POST)
	public Map<Long,Sports> shopListPage2() {
		Map<Long,Sports> shopList = sportService.findAllMap();
		return shopList;
	}
    
    @RequestMapping(value="/addSport", method=RequestMethod.POST)
	public Sports addSport(Sports elec1) {
		Sports e1 = sportService.create(elec1);
		return e1;
	}
   
    
}