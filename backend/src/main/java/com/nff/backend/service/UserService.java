package com.nff.backend.service;

import com.nff.backend.entity.User;
import com.nff.backend.repository.UserRepository;
import com.nff.backend.response.MyError;
import com.nff.backend.security.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Async
    public ResponseEntity<?> register(User queryUser) {
        User user = userRepository.findUsersByEmail(queryUser.getEmail());
        if(user == null){
            userRepository.save(queryUser);
            String token = TokenUtil.getToken(queryUser.getEmail(), queryUser.getPassword());
            return new ResponseEntity<>(token, HttpStatus.CREATED);
        }
        else{
            MyError err = new MyError();
            err.setStatus(400);
            err.setError("User exists");
            return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
        }
    }

    @Async
    public ResponseEntity<?> login(User queryUser){
        User user = userRepository.findUsersByEmail(queryUser.getEmail());
        if(user == null || !user.getPassword().equals(queryUser.getPassword())){
            MyError err = new MyError();
            err.setStatus(400);
            err.setError("No such user");
            return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
        }
        else{
            String token = TokenUtil.getToken(user.getEmail(), user.getPassword());
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
    }

    @Async
    public ResponseEntity<?> update(User queryUser){
        User user = userRepository.findUsersByEmail(queryUser.getEmail());
        if(user == null){
            MyError err = new MyError();
            err.setStatus(400);
            err.setError("No such user");
            return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
        }
        else{
            if(queryUser.getName() != null){
                user.setName(queryUser.getName());
            }
            if(queryUser.getGender() != null){
                user.setGender(queryUser.getGender());
            }
            if(queryUser.getLocation() != null){
                user.setLocation(queryUser.getLocation());
            }
            if(queryUser.getIntro() != null){
                user.setIntro(queryUser.getIntro());
            }
            if(queryUser.getAvatar() != null){
                user.setAvatar(queryUser.getAvatar());
            }
            userRepository.save(user);
            return new ResponseEntity<>("Saved", HttpStatus.OK);
        }
    }
}
