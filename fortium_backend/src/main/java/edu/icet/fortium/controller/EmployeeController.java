package edu.icet.fortium.controller;

import edu.icet.fortium.dto.Employee;
import edu.icet.fortium.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
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

    @GetMapping("/{id}")
    public ResponseEntity<Employee> searchById(@PathVariable Integer id) {
        Employee item = service.searchById(id);
        return item != null ?
                ResponseEntity.ok(item) :
                ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> update(@PathVariable Integer id, @RequestBody Employee updatedEmployee) {
        Employee employee = service.update(id, updatedEmployee);
        if (employee != null) {
            return ResponseEntity.ok(employee);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        boolean deleted = service.delete(id);
        return deleted ?
                ResponseEntity.noContent().build() :
                ResponseEntity.notFound().build();
    }

}
