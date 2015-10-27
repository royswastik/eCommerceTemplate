package com.swastikroy.shopb.service;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Cart;
import com.swastikroy.shopb.dto.Categories;
import com.swastikroy.shopb.dto.Clothing;
import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.dto.Furniture;
import com.swastikroy.shopb.dto.Music;
import com.swastikroy.shopb.dto.Sports;
import com.swastikroy.shopb.exception.ProductNotFound;
import com.swastikroy.shopb.repository.BookRepository;
import com.swastikroy.shopb.repository.CartRepository;
import com.swastikroy.shopb.repository.CategoryRepository;
import com.swastikroy.shopb.repository.ClothingRepository;
import com.swastikroy.shopb.repository.ElectronicRepository;
import com.swastikroy.shopb.repository.FurnitureRepository;
import com.swastikroy.shopb.repository.MusicRepository;
import com.swastikroy.shopb.repository.SportRepository;

@Service
public class CartServiceImpl implements CartService {

	@Resource
	private ElectronicRepository electronicRepository;
	@Resource
	private BookRepository bookRepository;
	@Resource
	private ClothingRepository clothingRepository;
	@Resource
	private MusicRepository musicRepository;
	@Resource
	private FurnitureRepository furnitureRepository;
	@Resource
	private SportRepository sportRepository;
	@Resource
	private CartRepository cartRepository;
	
	@Resource
	private CategoryRepository categoryRepository;

	@Override
	@Transactional
	public Cart create(Cart shop) {
		Cart createdElectronic = shop;
		return cartRepository.save(createdElectronic);
	}
	

	

	@Override
	@Transactional
	public List<Cart> findAll() {
		return cartRepository.findAll();
	}
	

	@Override
	@Transactional(rollbackFor=ProductNotFound.class)
	public Cart delete(long itemId, long userId, long categoryID) throws ProductNotFound {
		// TODO Auto-generated method stub
		Cart cart = cartRepository.findOneByUserIDItemID(userId,itemId,categoryID);
		if (cart == null)
			throw new ProductNotFound();
	/*	cartRepository.delete(cart);*/
		cartRepository.deleteOne(itemId,userId,categoryID);
		return cart;
	}

	@Override
	public Map<String, Object> findAllForUser(long user_id) {
		// TODO Auto-generated method stub
		Map<String, Object> result = new HashMap<String, Object>();
		Map<String, Integer> quantityMap = new HashMap<String, Integer>();
		List<Cart> cart_list = cartRepository.findAllByUserID(user_id);
		for(int i=0;i<cart_list.size();i++){
			Cart cart = cart_list.get(i);
			long item_id = cart.getItem_id();
			long category_id = cart.getCategory_id();
			Categories category = categoryRepository.findOne(category_id);
			Object product = new Object();
			switch(category.getCategoryName()){
			case "electronics":
				product = (Electronic) electronicRepository.findOne(item_id);
				break;
			case "books":
				product = (Book) bookRepository.findOne(item_id);
				break;
			case "clothing":
				product = (Clothing) clothingRepository.findOne(item_id);
				break;
			case "sports":
				product = (Sports) sportRepository.findOne(item_id);
				break;
			case "music":
				product = (Music) musicRepository.findOne(item_id);
				break;
			case "furniture":
				product = (Furniture) furnitureRepository.findOne(item_id);
				break;
			case "all":
				break;
			default:
				break;
			}
			if(result.containsKey(cart.getItem_id()+"_quantity")){
				result.put(cart.getItem_id()+"_quantity", ((int)result.get(cart.getItem_id()+"_quantity"))+1);
			}
			else{
				result.put(cart.getItem_id()+"_quantity", 1);
				result.put(cart.getItem_id()+"_category", category.getCategoryName());
			}
			if(!result.containsKey(String.valueOf(cart.getItem_id()))){
				result.put(String.valueOf(cart.getItem_id()), product);
			}
			
		}
		
		return result;
	}
	public void setIntField(String fieldName, int value)
	        throws NoSuchFieldException, IllegalAccessException {
	    Field field = getClass().getDeclaredField(fieldName);
	    field.setInt(this, value);
	}

	

}
