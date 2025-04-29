package edu.icet.fortium.service;

import edu.icet.fortium.dto.Employee;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

public interface EmployeeService {



    Employee add(Employee employee);
}
