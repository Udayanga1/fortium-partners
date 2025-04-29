package edu.icet.fortium.dto;

import edu.icet.fortium.util.DepartmentType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private Integer id;
    private String name;
    private String email;

    @Enumerated(EnumType.STRING)
    private DepartmentType type;
    private LocalDateTime timeCreated;
    private LocalDateTime timeUpdated;
}
