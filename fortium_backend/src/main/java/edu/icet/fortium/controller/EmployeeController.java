package edu.icet.fortium.controller;

import edu.icet.fortium.dto.Employee;
import edu.icet.fortium.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
@CrossOrigin
public class EmployeeController {

    private final EmployeeService service;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Employee employee) {
        Employee created = service.add(employee);
        if (created != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Employee Created");
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to Create Employee");
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAll() {
        List<Employee> list = service.getAll();
        return ResponseEntity.ok(list);
    }
}
