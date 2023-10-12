package com.back.usersapp.backusersapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.back.usersapp.backusersapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {
    
}
