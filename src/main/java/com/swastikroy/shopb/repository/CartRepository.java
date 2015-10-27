package com.swastikroy.shopb.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.swastikroy.shopb.dto.Book;
import com.swastikroy.shopb.dto.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    //Page<Book> findByNameLike(String name, Pageable pageable);
	/*@Query("SELECT * FROM cart_tb t where t.title = :title AND t.description = :description")
    public List<Object> findByTitleAndDescription(@Param("title") String title, 
                                                    @Param("description") String description);*/
	
	@Query(value = "SELECT * FROM cart_tb t where t.user_id = :userID AND t.item_id = :itemID AND t.category_id= :categoryID LIMIT 1",
            nativeQuery=true
			)
    public Cart findOneByUserIDItemID(@Param("userID") long userID, 
                                                    @Param("itemID") long itemID,@Param("categoryID") long categoryID);
	
	
	@Query(value = "SELECT * FROM cart_tb t where t.user_id = :userID",
            nativeQuery=true
			)
    public List<Cart> findAllByUserID(@Param("userID") long userID);
	
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM cart_tb WHERE user_id = :userId AND item_id = :itemId AND category_id= :categoryId LIMIT 1",
            nativeQuery=true
			)
    public void deleteOne(@Param("itemId") long itemId,@Param("userId") long userId,@Param("categoryId") long categoryId);
}