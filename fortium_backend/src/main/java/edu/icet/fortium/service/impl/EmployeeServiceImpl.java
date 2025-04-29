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
        entity.setTimeCreated(currentTime);
        entity.setTimeUpdated(currentTime);
        EmployeeEntity saved = repository.save(entity);
        return mapper.map(saved, Employee.class);
    }

//    @Override
//    public AuctionItem add(AuctionItem item) {
//        AuctionItemEntity entity = modelMapper.map(item, AuctionItemEntity.class);
//        AuctionItemEntity saved = repository.save(entity);
//        return modelMapper.map(saved, AuctionItem.class);
//    }
}
