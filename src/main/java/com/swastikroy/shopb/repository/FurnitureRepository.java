package com.swastikroy.shopb.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.swastikroy.shopb.dto.Furniture;

public interface FurnitureRepository extends JpaRepository<Furniture, Long> {
    //Page<Furniture> findByNameLike(String name, Pageable pageable);
}