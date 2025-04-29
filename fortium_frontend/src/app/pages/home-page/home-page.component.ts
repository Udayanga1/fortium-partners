import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  
  getAllEmployees() {
    fetch("http://localhost:8080/employee/all")
    .then((response) => response.json())
    .then((result) => {
      this.allEmployees = result;
      console.log(this.allEmployees);
      
    })
    .catch((error) => console.error(error));

  }

}
