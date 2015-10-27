package com.swastikroy.shopb.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.swastikroy.shopb.dto.Music;

public interface MusicRepository extends JpaRepository<Music, Long> {
    //Page<Music> findByNameLike(String name, Pageable pageable);
}