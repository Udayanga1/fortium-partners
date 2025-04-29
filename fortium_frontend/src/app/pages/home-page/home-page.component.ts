import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule ,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  allEmployees:Employee[] = [];

  ngOnInit(){
    this.getAllEmployees();
  }

  constructor(private employeeService: EmployeeService){

  }
  
  getAllEmployees() {
    fetch("http://localhost:8080/employee/all")
    .then((response) => response.json())
    .then((result) => {
      this.allEmployees = result;
      console.log(this.allEmployees);
      
    })
    .catch((error) => console.error(error));

  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          alert('Employee deleted');
          this.allEmployees = this.allEmployees.filter(emp => emp.id !== id);
        },
        error: err => {
          console.error('Delete failed:', err);
          alert('Failed to delete employee');
        }
      });
    }
  }

}
