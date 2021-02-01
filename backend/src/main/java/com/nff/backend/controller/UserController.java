package com.nff.backend.controller;

import com.nff.backend.entity.User;
import com.nff.backend.response.MyError;
import com.nff.backend.security.TokenUtil;
import com.nff.backend.service.AmazonS3ClientService;
import com.nff.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AmazonS3ClientService amazonS3ClientService;

    @PostMapping(path="/register")
    public @ResponseBody
    ResponseEntity<?> register (@RequestParam String email
            , @RequestParam String password){
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        return userService.register(user);
    }

    @PostMapping(path="/login") // Map ONLY POST Requests
    public @ResponseBody
    ResponseEntity<?> login (@RequestParam String email
            , @RequestParam String password) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        return userService.login(user);
    }

    @PutMapping(path="/profile")
    public @ResponseBody
    ResponseEntity<?> update (@RequestHeader String token, @RequestParam(required = false) String name, @RequestParam(required = false) Integer gender, @RequestParam(required = false) String location, @RequestParam(required = false) String intro, @RequestParam(required = false) MultipartFile pic){
        User user = new User();
        try {
            user.setEmail(TokenUtil.decode(token));
        } catch (Exception e) {
            e.printStackTrace();
            MyError err = new MyError();
            err.setStatus(401);
            err.setError(e.getMessage());
            return new ResponseEntity<>(err, HttpStatus.UNAUTHORIZED);
        }
        user.setName(name);
        user.setGender(gender);
        user.setLocation(location);
        user.setIntro(intro);
        if(pic != null && !pic.isEmpty()){
            String fileName = user.getEmail() + "_" + pic.getOriginalFilename();
            this.amazonS3ClientService.upload(pic, fileName, true);
            user.setAvatar(this.amazonS3ClientService.getAwsS3URL() + fileName);
        }
        return userService.update(user);
    }
}