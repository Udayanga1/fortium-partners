package edu.icet.fortium.service;

import edu.icet.fortium.dto.Employee;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {



    Employee add(Employee employee);

    List<Employee> getAll();
}
