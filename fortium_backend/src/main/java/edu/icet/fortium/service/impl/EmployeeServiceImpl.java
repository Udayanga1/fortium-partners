package edu.icet.fortium.service.impl;

import edu.icet.fortium.dto.Employee;
import edu.icet.fortium.entity.EmployeeEntity;
import edu.icet.fortium.repository.EmployeeRepository;
import edu.icet.fortium.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final ModelMapper mapper;
    private final EmployeeRepository repository;

    private static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";

    @Override
    public Employee add(Employee employee) {
        if (!employee.getEmail().matches(EMAIL_REGEX)) {
            throw new IllegalArgumentException("Invalid email address: " + employee.getEmail());
        }
        LocalDateTime currentTime = LocalDateTime.now();
        EmployeeEntity entity = mapper.map(employee, EmployeeEntity.class);
        entity.setCreatedAt(currentTime);
        entity.setUpdatedAt(currentTime);
        EmployeeEntity saved = repository.save(entity);
        return mapper.map(saved, Employee.class);
    }

    @Override
    public List<Employee> getAll() {
        List<Employee> employeeList = new ArrayList<>();
        List<EmployeeEntity> all = repository.findAll();
        all.forEach(employeeEntity -> employeeList.add(mapper.map(employeeEntity, Employee.class)));
        return employeeList;
    }

    @Override
    public Employee searchById(Integer id) {
        return repository.findById(id)
                .map(employeeEntity -> mapper.map(employeeEntity, Employee.class))
                .orElse(null);
    }

    @Override
    public Employee update(Integer id, Employee updatedEmployee) {
        EmployeeEntity entity = repository.findById(id).orElse(null);
        if (entity == null) {
            return null;
        }

        entity.setName(updatedEmployee.getName());
        entity.setEmail(updatedEmployee.getEmail());
        entity.setDepartment(updatedEmployee.getDepartment());
        entity.setUpdatedAt(LocalDateTime.now());

        EmployeeEntity updatedEntity = repository.save(entity);
        return mapper.map(updatedEntity, Employee.class);
    }

//    List<AuctionItem> auctionItemList = new ArrayList<>();
//    List<AuctionItemEntity> all = repository.findAll();
//        all.forEach(auctionItemEntity -> auctionItemList.add(modelMapper.map(auctionItemEntity, AuctionItem.class)));
//        return auctionItemList;
}
