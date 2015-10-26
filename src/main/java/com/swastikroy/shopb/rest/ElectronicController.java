package com.swastikroy.shopb.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.service.BookService;
import com.swastikroy.shopb.service.ElectronicService;
import com.swastikroy.shopb.validation.ElectronicValidator;

@Controller
@RequestMapping(value="/shop")
public class ElectronicController {
	
	@Autowired
	private ElectronicService electronicService;
	@Autowired
	private BookService bookService;
	
	@Autowired
	private ElectronicValidator shopValidator;
	
	@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(shopValidator);
	}

	@RequestMapping(value="/create", method=RequestMethod.GET)
	public ModelAndView newElectronicPage() {
		ModelAndView mav = new ModelAndView("shop-new", "shop", new Electronic());
		return mav;
	}
	
	@RequestMapping(value="/create", method=RequestMethod.POST)
	public ModelAndView createNewElectronic(@ModelAttribute @Valid Electronic shop,
			BindingResult result,
			final RedirectAttributes redirectAttributes) {
		
		if (result.hasErrors())
			return new ModelAndView("shop-new");
		
		ModelAndView mav = new ModelAndView();
		String message = "New shop "+shop.getName()+" was successfully created.";
		
		electronicService.create(shop);
		mav.setViewName("redirect:/index.html");
				
		redirectAttributes.addFlashAttribute("message", message);	
		return mav;		
	}
	
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public ModelAndView shopListPage() {
		ModelAndView mav = new ModelAndView("shop-list");
		List<Electronic> shopList = electronicService.findAll();
		mav.addObject("shopList", shopList);
		return mav;
	}
	@RequestMapping(value="/product2/{category}/{id}", method=RequestMethod.GET)
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
			break;
		case "sports":
			break;
		case "music":
			break;
		case "furniture":
			break;
		case "all":
			break;
		default:
			break;
		}
		ModelAndView mav = new ModelAndView("/product-details");
		
		mav.addObject("product", response);
		return mav;
	}
	
	
	@RequestMapping(value="/edit/{id}", method=RequestMethod.GET)
	public ModelAndView editElectronicPage(@PathVariable Integer id) {
		ModelAndView mav = new ModelAndView("shop-edit");
		Electronic shop = electronicService.findById(id);
		mav.addObject("shop", shop);
		return mav;
	}
	
	@RequestMapping(value="/edit/{id}", method=RequestMethod.POST)
	public ModelAndView editElectronic(@ModelAttribute @Valid Electronic shop,
			BindingResult result,
			@PathVariable Integer id,
			final RedirectAttributes redirectAttributes) throws ProductNotFound {
		
		if (result.hasErrors())
			return new ModelAndView("shop-edit");
		
		ModelAndView mav = new ModelAndView("redirect:/index.html");
		String message = "Electronic was successfully updated.";

		electronicService.update(shop);
		
		redirectAttributes.addFlashAttribute("message", message);	
		return mav;
	}
	
	@RequestMapping(value="/delete/{id}", method=RequestMethod.GET)
	public ModelAndView deleteElectronic(@PathVariable Integer id,
			final RedirectAttributes redirectAttributes) throws ProductNotFound {
		
		ModelAndView mav = new ModelAndView("redirect:/index.html");		
		
		Electronic shop = electronicService.delete(id);
		String message = "The shop "+shop.getName()+" was successfully deleted.";
		
		redirectAttributes.addFlashAttribute("message", message);
		return mav;
	}
	
}
