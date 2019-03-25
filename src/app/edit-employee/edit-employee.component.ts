import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EMPLOYEES } from "../mock-employees";
import { Employee } from "../employee";
import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"]
})
export class EditEmployeeComponent implements OnInit {
  employees: Employee[] = EMPLOYEES;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router) {}
  onCancel(): void {
    this.router.navigate(["/employees"]);
  }
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.employees.forEach(emp => {
      if (id === emp.id) {
        this.employee = emp;
      }
    });
  }
}
