package com.nff.backend.service;

import com.nff.backend.entity.User;
import com.nff.backend.repository.UserRepository;
import com.nff.backend.security.TokenUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserService {
    @Resource
    private UserRepository userRepository;

    @Transactional
    public ResponseEntity<String> register(User queryUser){
        User user = userRepository.findUsersByEmail(queryUser.getEmail());
        if(user == null){
            userRepository.save(queryUser);
            String token = TokenUtil.getToken(queryUser.getEmail(), queryUser.getPassword());
            return new ResponseEntity<>(token, HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity<>("User exists", HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    public ResponseEntity<String> login(User queryUser){
        User user = userRepository.findUsersByEmail(queryUser.getEmail());
        if(user == null || !user.getPassword().equals(queryUser.getPassword())){
            return new ResponseEntity<>("No such user", HttpStatus.BAD_REQUEST);
        }
        else{
            String token = TokenUtil.getToken(user.getEmail(), user.getPassword());
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
    }
}
