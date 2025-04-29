import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "create",
        component: CreateEmployeeComponent
    },
    {
        path: "edit/:id",
        component: EditEmployeeComponent
    }
];
