package com.back.usersapp.backusersapp.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.usersapp.backusersapp.models.entities.User;
import com.back.usersapp.backusersapp.models.request.UserRequest;
import com.back.usersapp.backusersapp.services.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path = "/users")
public class UserController {
    
    @Autowired
    private UserService service;

    @GetMapping
    public List<User> getUsers() {
        return service.findAll();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        Optional<User> user = service.findById(id);
        if(user.isPresent()) {
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    //@ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
        if(result.hasErrors()) {
            return validation(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user)); // 201
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<?> updateUser(@Valid @RequestBody UserRequest user, BindingResult result, @PathVariable Long id) {
        if(result.hasErrors()) {
            return validation(result);
        }
        Optional<User> o = service.update(user, id);
        if(o.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(o.get()); // 201
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        Optional<User> o = service.findById(id);
        if(o.isPresent()) {
            service.remove(id);
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.notFound().build();
    }

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> erros = new HashMap<>();
        result.getFieldErrors().forEach(e -> {
            erros.put(e.getField(), "El campo " + e.getField() + " " + e.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(erros);
    }
}
