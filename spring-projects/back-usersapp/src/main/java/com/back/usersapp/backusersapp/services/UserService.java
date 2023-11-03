package com.back.usersapp.backusersapp.services;

import java.util.List;
import java.util.Optional;

import com.back.usersapp.backusersapp.models.dto.UserDto;
import com.back.usersapp.backusersapp.models.entities.User;
import com.back.usersapp.backusersapp.models.request.UserRequest;

public interface UserService {
    
    List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    UserDto save(User user);

    Optional<UserDto> update(UserRequest user, Long id);

    void remove(Long id);
}
