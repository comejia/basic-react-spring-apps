package com.back.usersapp.backusersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.back.usersapp.backusersapp.models.dto.UserDto;
import com.back.usersapp.backusersapp.models.dto.mapper.DtoMapperUser;
import com.back.usersapp.backusersapp.models.entities.Role;
import com.back.usersapp.backusersapp.models.entities.User;
import com.back.usersapp.backusersapp.models.request.UserRequest;
import com.back.usersapp.backusersapp.repositories.RoleRepository;
import com.back.usersapp.backusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    @Override
    public List<UserDto> findAll() {
        List<User> users = (List<User>) repository.findAll();

        return users
                .stream()
                .map(u -> DtoMapperUser.builder().setUser(u).build())
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<UserDto> findById(Long id) {
        return repository
                .findById(id)
                .map(u -> DtoMapperUser.builder().setUser(u).build());
    }

    @Transactional
    @Override
    public UserDto save(User user) {
        String passwordBCrypt = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBCrypt);

        Optional<Role> o = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();

        if (o.isPresent()) {
            roles.add(o.orElseThrow());   
        }

        user.setRoles(roles);

        return DtoMapperUser.builder().setUser(repository.save(user)).build();
    }

    @Transactional
    @Override
    public Optional<UserDto> update(UserRequest user, Long id) {
        Optional<User> o = repository.findById(id);
        if(o.isPresent()) {
            User usr = o.get();
            usr.setUsername(user.getUsername());
            usr.setEmail(user.getEmail());
            return Optional.of(DtoMapperUser.builder().setUser(repository.save(usr)).build());
        }
        return Optional.empty();
    }

    @Transactional
    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }    
}
