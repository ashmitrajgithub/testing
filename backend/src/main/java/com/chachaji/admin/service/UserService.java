package com.chachaji.admin.service;

import com.chachaji.admin.entity.User;
import com.chachaji.admin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllShopOwners() {
        return userRepository.findByRole(User.UserRole.SHOP_OWNER);
    }

    public List<User> getAllWorkers() {
        return userRepository.findByRole(User.UserRole.WORKER);
    }

    public List<User> getPendingVerifications() {
        return userRepository.findByStatus(User.UserStatus.PENDING);
    }

    public User verifyUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setStatus(User.UserStatus.VERIFIED);
        return userRepository.save(user);
    }

    public User rejectUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setStatus(User.UserStatus.REJECTED);
        return userRepository.save(user);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }
}
