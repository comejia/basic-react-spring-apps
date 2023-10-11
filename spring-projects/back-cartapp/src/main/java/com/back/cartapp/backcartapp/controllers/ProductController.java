package com.back.cartapp.backcartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.cartapp.backcartapp.models.entities.Product;
import com.back.cartapp.backcartapp.services.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path = "/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping
    public List<Product> getProducts() {
        return service.findAll();
    }
}
