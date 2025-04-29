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

    if(this.empName.length==0 || this.empEmail.length==0 || this.department.length==0) {
      alert("Please fill all the fields")
      return
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": this.empName,
      "email": this.empEmail,
      "department": this.department
    });

    const requestOptions:any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:8080/employee/add", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      alert("Employee added successfully");
      this.empName = '';
      this.empEmail = '';
      this.department = '';
    })
    .catch((error) => {
      console.error('Error adding employee:', error);
      alert("Failed to add employee. Please check the data or try again.");
    });

  }
}
