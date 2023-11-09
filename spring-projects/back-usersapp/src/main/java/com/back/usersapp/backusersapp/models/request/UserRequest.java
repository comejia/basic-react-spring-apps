package com.back.usersapp.backusersapp.models.request;

import com.back.usersapp.backusersapp.models.IUser;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest implements IUser {
    
    @NotBlank
    @Size(min = 2, max = 15)
    private String username;

    @NotBlank
    @Email
    private String email;

    private boolean admin;
}
