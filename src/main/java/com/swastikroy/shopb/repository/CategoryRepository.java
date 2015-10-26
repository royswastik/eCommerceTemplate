package com.swastikroy.shopb.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Cart;
import com.swastikroy.shopb.dto.Categories;

public interface CategoryRepository extends JpaRepository<Categories, Long> {
    //Page<Book> findByNameLike(String name, Pageable pageable);
	@Query(value = "SELECT * FROM categories_tb t where t.category_name = :categoryName",
            nativeQuery=true)
    public Categories findIdByName(@Param("categoryName") String categoryName);
}