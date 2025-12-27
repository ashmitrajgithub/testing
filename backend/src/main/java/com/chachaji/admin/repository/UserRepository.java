package com.chachaji.admin.repository;

import com.chachaji.admin.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByRole(User.UserRole role);
    List<User> findByStatus(User.UserStatus status);
}
