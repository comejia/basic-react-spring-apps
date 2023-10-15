package com.back.usersapp.backusersapp.services;

import java.util.List;
import java.util.Optional;

import com.back.usersapp.backusersapp.models.entities.User;
import com.back.usersapp.backusersapp.models.request.UserRequest;

public interface UserService {
    
    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);

    Optional<User> update(UserRequest user, Long id);

    void remove(Long id);
}
