package com.swastikroy.shopb.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.swastikroy.shopb.dto.Clothing;

public interface ClothingRepository extends JpaRepository<Clothing, Long> {
    //Page<Clothing> findByNameLike(String name, Pageable pageable);
}