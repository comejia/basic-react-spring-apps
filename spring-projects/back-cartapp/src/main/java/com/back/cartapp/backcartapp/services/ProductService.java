package com.back.cartapp.backcartapp.services;

import java.util.List;

import com.back.cartapp.backcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
