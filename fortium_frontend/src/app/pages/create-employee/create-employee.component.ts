import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  empName: string = '';
  empEmail: string = '';
  department: string = '';

  addCustomer(event: Event) {
    console.log("Name:", this.empName);
    console.log("Email:", this.empEmail);
    console.log("Department:", this.department);

    this.empName = '';
    this.empEmail = '';
    this.department = '';
  }
}
