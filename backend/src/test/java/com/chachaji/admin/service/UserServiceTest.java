package com.chachaji.admin.service;

import com.chachaji.admin.entity.User;
import com.chachaji.admin.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    public void testVerifyUser() {
        User pendingUser = User.builder()
                .id(1L)
                .name("Test User")
                .status(User.UserStatus.PENDING)
                .build();

        Mockito.when(userRepository.findById(1L)).thenReturn(Optional.of(pendingUser));
        Mockito.when(userRepository.save(Mockito.any(User.class))).thenAnswer(i -> i.getArguments()[0]);

        User verifiedUser = userService.verifyUser(1L);

        Assertions.assertEquals(User.UserStatus.VERIFIED, verifiedUser.getStatus());
    }
}
