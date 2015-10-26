package com.swastikroy.shopb.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_tb")
public class UserDetails implements Serializable {
	private long user_id;
    private String name;
    private String password;
    private String email;
    private String phone;
    private String description;
    
    
    public UserDetails(long id, String name,String password,String email,String phone,String description) {
        this.user_id = (long)id;
        this.description = description;
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
    public UserDetails() {
   
    }
    
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "user_id", nullable = false)
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	
	@Column(name = "name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "password")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Column(name = "email")
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name = "phone")
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	@Column(name = "description")
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
