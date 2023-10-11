package com.back.cartapp.backcartapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.back.cartapp.backcartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
    
}
