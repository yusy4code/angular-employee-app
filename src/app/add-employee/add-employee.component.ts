import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"]
})
export class AddEmployeeComponent implements OnInit {
  constructor(private router: Router) {}

  onCancel(): void {
    this.router.navigate(["/employees"]);
  }
  onSubmit(): void {
    alert("Functionality is not coded yet..!!!");
    this.router.navigate(["/employees"]);
  }
  ngOnInit() {}
}
