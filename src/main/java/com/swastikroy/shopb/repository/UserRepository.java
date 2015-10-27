package com.swastikroy.shopb.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.swastikroy.shopb.dto.Cart;
import com.swastikroy.shopb.dto.Electronic;
import com.swastikroy.shopb.dto.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails, Long> {
	@Query(value = "SELECT * FROM user_tb t where t.name = :uname LIMIT 1",
            nativeQuery=true
			)
    public UserDetails findAllByName(@Param("uname") String uname);
	
	@Query(value = "SELECT * FROM user_tb t where t.email = :email LIMIT 1",
            nativeQuery=true
			)
    public UserDetails findAllByEmail(@Param("email") String email);
}