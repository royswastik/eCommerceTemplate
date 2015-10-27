package com.swastikroy.shopb.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.swastikroy.shopb.dto.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    //Page<Book> findByNameLike(String name, Pageable pageable);
}