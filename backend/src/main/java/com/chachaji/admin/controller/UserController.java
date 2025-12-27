package com.chachaji.admin.controller;

import com.chachaji.admin.entity.User;
import com.chachaji.admin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/shop-owners")
    public List<User> getShopOwners() {
        return userService.getAllShopOwners();
    }

    @GetMapping("/workers")
    public List<User> getWorkers() {
        return userService.getAllWorkers();
    }

    @GetMapping("/verification")
    public List<User> getPendingVerifications() {
        return userService.getPendingVerifications();
    }

    @PostMapping("/{id}/verify")
    public User verifyUser(@PathVariable Long id) {
        return userService.verifyUser(id);
    }

    @PostMapping("/{id}/reject")
    public User rejectUser(@PathVariable Long id) {
        return userService.rejectUser(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
