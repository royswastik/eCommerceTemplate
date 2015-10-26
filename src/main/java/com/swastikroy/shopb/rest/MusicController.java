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

import com.swastikroy.shopb.dto.Music;
import com.swastikroy.shopb.service.MusicService;



@RestController
public class MusicController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private MusicService musicService;
	
	
	

    @RequestMapping(value="/listmusic", method=RequestMethod.GET)
	public List<Music> shopListPage() {
		List<Music> shopList = musicService.findAll();
		return shopList;
	}
    @RequestMapping(value="/musicAll", method=RequestMethod.POST)
	public Map<Long,Music> shopListPage2() {
		Map<Long,Music> shopList = musicService.findAllMap();
		return shopList;
	}
    
    @RequestMapping(value="/addMusic", method=RequestMethod.POST)
	public Music addMusic(Music elec1) {
		Music e1 = musicService.create(elec1);
		return e1;
	}
   
    
}