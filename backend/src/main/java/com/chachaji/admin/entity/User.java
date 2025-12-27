package com.chachaji.admin.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String city;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    private int leads;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    public enum UserStatus {
        VERIFIED, PENDING, REJECTED
    }

    public enum UserRole {
        SHOP_OWNER, WORKER
    }
}
