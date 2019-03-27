import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeeComponent } from "./list-employee/list-employee.component";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    WelcomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "employees/new",
        component: AddEmployeeComponent
      },
      {
        path: "employees/:id",
        component: EditEmployeeComponent
      },
      {
        path: "employees",
        component: ListEmployeeComponent
      },
      {
        path: "welcome",
        component: WelcomeComponent
      },
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
