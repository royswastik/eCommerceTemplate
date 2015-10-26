package com.swastikroy.shopb.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import com.swastikroy.shopb.dto.Sports;

public interface SportRepository extends JpaRepository<Sports, Long> {
    //Page<Sport> findByNameLike(String name, Pageable pageable);
}