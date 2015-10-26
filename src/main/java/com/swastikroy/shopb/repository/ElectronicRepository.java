package com.swastikroy.shopb.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.swastikroy.shopb.dto.Electronic;

public interface ElectronicRepository extends JpaRepository<Electronic, Long> {
    //Page<Electronic> findByNameLike(String name, Pageable pageable);
}