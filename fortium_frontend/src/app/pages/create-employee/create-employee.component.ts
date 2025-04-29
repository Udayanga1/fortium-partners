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

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": this.empName,
      "email": this.empEmail,
      "type": this.department
    });

    const requestOptions:any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:8080/employee/add", requestOptions)
      .then((response) => response.text())
      .then((text) => console.log(text))
      .catch((error) => console.error(error));

    // fetch('https://fakestoreapi.com/products/category/electronics')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   this.products.set(data);
    // });


    this.empName = '';
    this.empEmail = '';
    this.department = '';
  }
}
