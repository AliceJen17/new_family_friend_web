package com.nff.backend.service;

import com.nff.backend.entity.User;
import com.nff.backend.repository.UserRepository;
import com.nff.backend.security.TokenUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserService {
    @Resource
    private UserRepository userRepository;

    @Transactional
    public String register(User user){
        List<User> users = userRepository.findAllUsersByEmail(user.getEmail());
        if(users.isEmpty()){
            userRepository.save(user);
            String token = TokenUtil.getToken(user.getEmail(), user.getPassword());
            return token;
        }
        else{
            return "User exists";
        }
    }
}
