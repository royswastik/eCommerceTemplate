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

import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.service.ElectronicService;
import com.swastikroy.shopb.validation.ElectronicValidator;


@RestController
public class ProductController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
	private ElectronicService electronicService;
	
	@Autowired
	private ElectronicValidator shopValidator;
	
	@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(shopValidator);
	}

    @RequestMapping("/greeting")
    public Electronic greeting(@RequestParam(value="name", defaultValue="World") String name,@RequestParam(value="name2", defaultValue="Swastik") String name2) {
        return new Electronic((int) counter.incrementAndGet(),
                            String.format(template, name),name2);
    }
    @RequestMapping(value="/list2", method=RequestMethod.GET)
	public List<Electronic> shopListPage() {
		List<Electronic> shopList = electronicService.findAll();
		return shopList;
	}
    @RequestMapping(value="/electronicsAll", method=RequestMethod.POST)
	public Map<Long,Electronic> shopListPage2() {
		Map<Long,Electronic> shopList = electronicService.findAllMap();
		return shopList;
	}
    
    /*@RequestMapping(value="addElectronic", method=RequestMethod.GET)
	public Map<Long,Electronic> shopListPage2(@RequestParam(value="name", defaultValue="New Item") String name,@RequestParam(value="discount", defaultValue="0") int discount, @RequestParam(value="outOfStock", defaultValue="false") boolean outOfStock,@RequestParam(value="name", defaultValue="World") String name, @RequestParam(value="name", defaultValue="World") String name) {
		Map<Long,Electronic> shopList = electronicService.findAllMap();
		return shopList;
	}*/
    @RequestMapping(value="/addElectronic", method=RequestMethod.POST)
	public Electronic addElectronic(Electronic elec1) {
		Electronic e1 = electronicService.create(elec1);
		return e1;
	}
    @RequestMapping("/agencies")
    public List<Electronic> getAgencies() {

        List<Electronic> agencies = getListing();

        return agencies;

    }
    private List<Electronic> getListing() {

        List<Electronic> resources = new ArrayList<>();
        resources.add(new Electronic(1, "All State", "123"));
        resources.add(new Electronic(2, "FCCI Insurance Group", "456"));
        resources.add(new Electronic(3, "Farmers", "789"));
        resources.add(new Electronic(4, "Met life", "167"));

        return resources;
    }
}