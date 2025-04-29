package edu.icet.fortium.entity;

import edu.icet.fortium.util.DepartmentType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String name;
    @Column(nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "dept", nullable = false)
    private DepartmentType type;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime timeCreated;
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime timeUpdated;
}
