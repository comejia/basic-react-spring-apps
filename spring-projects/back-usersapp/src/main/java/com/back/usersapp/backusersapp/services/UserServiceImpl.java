package com.back.usersapp.backusersapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.back.usersapp.backusersapp.models.entities.User;
import com.back.usersapp.backusersapp.models.request.UserRequest;
import com.back.usersapp.backusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    @Override
    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    @Transactional
    @Override
    public User save(User user) {
        String passwordBCrypt = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBCrypt);
        return repository.save(user);
    }

    @Transactional
    @Override
    public Optional<User> update(UserRequest user, Long id) {
        Optional<User> o = findById(id);
        if(o.isPresent()) {
            User usr = o.get();
            usr.setUsername(user.getUsername());
            usr.setEmail(user.getEmail());
            return Optional.of(save(usr));
        }
        return Optional.empty();
    }

    @Transactional
    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }    
}
