package com.swastikroy.shopb.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sport_tb")
public class Sports implements Serializable {

	private long id;
    private String name;
    private int mrp;
    private String discount;
    private boolean outOfStock;
    private int rating;
    private int reviews;
    private String description;
    private String image_url;
    private String thumbnail;
    private boolean in_cart;
    private boolean search_option;
    
	private String brand;
    private String sport;
 
    
    
    @Column(name = "brand")
    public String getGenre() {
		return brand;
	}

	public void setGenre(String brand) {
		this.brand = brand;
	}

	@Column(name = "sport")
	public String getAuthor() {
		return sport;
	}

	public void setAuthor(String sport) {
		this.sport = sport;
	}

    
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	public long getId() {
        return id;
    }

    @Column(name = "name", unique = true, nullable = false, length = 50)
    public String getName() {
		return name;
	}
        
    @Column(name = "description")
    public String getDescription() {
        return description;
    }
    
    
    @Column(name = "mrp")
    public int getMrp() {
		return mrp;
	}

	public void setMrp(int mrp) {
		this.mrp = mrp;
	}

	@Column(name = "discount")
	public String getDiscount() {
		return discount;
	}

	public void setDiscount(String discount) {
		this.discount = discount;
	}

	@Column(name = "outOfStock")
	public boolean isOutOfStock() {
		return outOfStock;
	}

	public void setOutOfStock(boolean outOfStock) {
		this.outOfStock = outOfStock;
	}

	@Column(name = "rating")
	public int isRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	@Column(name = "reviews")
	public int isReviews() {
		return reviews;
	}

	public void setReviews(int reviews) {
		this.reviews = reviews;
	}

	@Column(name = "image_url")
	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	@Column(name = "thumbnail")
	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	@Column(name = "in_cart")
	public boolean isIn_cart() {
		return in_cart;
	}

	public void setIn_cart(boolean in_cart) {
		this.in_cart = in_cart;
	}

	@Column(name = "search_option")
	public boolean getSearch_option() {
		return search_option;
	}

	public void setSearch_option(boolean search_option) {
		this.search_option = search_option;
	}



	

	
	public void setId(long id) {
		this.id = (long)id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	

    public Sports() {
 
    }
    
    public Sports(long id, String description,String name) {
        this.id = (long)id;
        this.description = description;
        this.name = name;
    }
    
    @Override
    public String toString() {
        return String.format(
                "Sport[id=%d, name='%s', description='%s']",
                id, description, name);
    }

}