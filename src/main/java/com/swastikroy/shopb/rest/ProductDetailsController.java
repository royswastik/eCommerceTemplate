package com.swastikroy.shopb.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Clothing;
import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.dto.Furniture;
import com.swastikroy.shopb.dto.Music;
import com.swastikroy.shopb.dto.Sports;
import com.swastikroy.shopb.service.BookService;
import com.swastikroy.shopb.service.ClothingService;
import com.swastikroy.shopb.service.ElectronicService;
import com.swastikroy.shopb.service.FurnitureService;
import com.swastikroy.shopb.service.MusicService;
import com.swastikroy.shopb.service.SportService;
import com.swastikroy.shopb.validation.BookValidator;


@Controller
public class ProductDetailsController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private BookService bookService;
    
    @Autowired
	private ElectronicService electronicService;
    @Autowired
	private MusicService musicService;
    @Autowired
	private FurnitureService furnitureService;
    @Autowired
	private SportService sportService;
    @Autowired
	private ClothingService clothingService;
	

    @RequestMapping(value="/productrest/{category}/{id}", method=RequestMethod.POST)
    @ResponseBody
	public Object product(@PathVariable Integer id, @PathVariable String category) {
    	Object response = null;
		switch(category){
		case "electronics":
			response = (Electronic) electronicService.findById(id);
			break;
		case "books":
			response = (Book) bookService.findById(id);
			break;
		case "clothing":
			response = (Clothing) clothingService.findById(id);
			break;
		case "sports":
			response = (Sports) sportService.findById(id);
			break;
		case "music":
			response = (Music) musicService.findById(id);
			break;
		case "furniture":
			response = (Furniture) furnitureService.findById(id);
			break;
		case "all":
			break;
		default:
			break;
		}
		return response;
	}
    
  
    @RequestMapping(value="/product/{category}/{id}", method=RequestMethod.GET)
	public ModelAndView editElectronicPage2(@PathVariable String id, @PathVariable String category) {
		Object response = null;
		switch(category){
		case "electronics":
			response = (Electronic) electronicService.findById(Integer.parseInt(id));
			break;
		case "books":
			response = (Book) bookService.findById(Integer.parseInt(id));
			break;
		case "clothing":
			response = (Clothing) clothingService.findById(Integer.parseInt(id));
			break;
		case "sports":
			response = (Sports) sportService.findById(Integer.parseInt(id));
			break;
		case "music":
			response = (Music) musicService.findById(Integer.parseInt(id));
			break;
		case "furniture":
			response = (Furniture) furnitureService.findById(Integer.parseInt(id));
			break;
		case "all":
			break;
		default:
			break;
		}
		ModelAndView mav = new ModelAndView("forward:/product-details");
		mav.addObject("category", category);
		mav.addObject("product", response);
		return mav;
	}
   
    
}