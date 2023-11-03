package com.back.usersapp.backusersapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.back.usersapp.backusersapp.models.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {

    Optional<Role> findByName(String name);

}
