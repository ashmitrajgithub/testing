package com.chachaji.admin.service;

import com.chachaji.admin.entity.CallLog;
import com.chachaji.admin.repository.CallLogRepository;
import com.chachaji.admin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CallLogRepository callLogRepository;

    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("shopOwners", userRepository.count()); // Simplification, should filter by role
        stats.put("workers", userRepository.count()); // Simplification
        stats.put("verifiedProfiles", userRepository.count()); // Simplification
        stats.put("totalCalls", callLogRepository.count());
        return stats;
    }
}
