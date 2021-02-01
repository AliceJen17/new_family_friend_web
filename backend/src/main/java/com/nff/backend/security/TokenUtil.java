package com.nff.backend.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;

public class TokenUtil {
    public static String getToken(String id, String password) {
        return JWT.create().withAudience(id).sign(Algorithm.HMAC256(password));
    }

    public static String decode(String token) throws Exception {
        try{
            return JWT.decode(token).getAudience().get(0);
        }
        catch(JWTDecodeException e){
            throw new Exception(e.getMessage());
        }
    }
}
