package com.chachaji.admin;

import com.chachaji.admin.entity.User;
import com.chachaji.admin.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        return args -> {
            if (userRepository.count() == 0) {
                userRepository.save(User.builder()
                        .name("Adarsh Kumar")
                        .phone("9504623778")
                        .city("Patna")
                        .status(User.UserStatus.VERIFIED)
                        .leads(24)
                        .role(User.UserRole.SHOP_OWNER)
                        .build());

                userRepository.save(User.builder()
                        .name("Vikram Singh")
                        .phone("9876543210")
                        .city("Mumbai")
                        .status(User.UserStatus.PENDING)
                        .leads(12)
                        .role(User.UserRole.SHOP_OWNER)
                        .build());

                userRepository.save(User.builder()
                        .name("Ramesh Singh")
                        .phone("9876543210")
                        .city("Delhi")
                        .status(User.UserStatus.PENDING)
                        .leads(3)
                        .role(User.UserRole.WORKER)
                        .build());

                 userRepository.save(User.builder()
                        .name("Amit Verma")
                        .phone("9123456789")
                        .city("Noida")
                        .status(User.UserStatus.PENDING)
                        .leads(0)
                        .role(User.UserRole.WORKER) // Assuming for verification list
                        .build());
            }
        };
    }
}
