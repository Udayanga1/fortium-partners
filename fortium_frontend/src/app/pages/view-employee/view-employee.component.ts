import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-employee',
  imports: [RouterLink, CommonModule],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {

  employeeId!: number;
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    department: 'HR',
    createdAt: undefined,
    updatedAt: undefined
  };

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeeById(this.employeeId).subscribe(employeeData => {
      this.employee = employeeData;
    });
    
  }
}
