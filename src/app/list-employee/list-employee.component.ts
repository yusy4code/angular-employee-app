import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EMPLOYEES } from "../mock-employees";

@Component({
  selector: "app-list-employee",
  templateUrl: "./list-employee.component.html",
  styleUrls: ["./list-employee.component.css"]
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = EMPLOYEES;

  constructor() {}

  ngOnInit() {}
}
