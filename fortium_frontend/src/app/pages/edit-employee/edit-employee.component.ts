import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {

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
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }

  updateCustomer(event: Event): void {
    if (!this.employee.name || !this.employee.email || !this.employee.department) {
      alert("Please fill all the fields");
      return;
    }

    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe({
      next: (res) => {
        console.log('Employee updated:', res);
        alert("Employee updated successfully");
      },
      error: (err) => {
        console.error('Update failed:', err);
        alert("Error updating employee");
      }
    });
  }

}
