import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ListEmployeeComponent } from "./list-employee/list-employee.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";

import { Location } from "@angular/common";
import { Routes, Router } from "@angular/router";

const routes: Routes = [
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
];

fdescribe("Router: App testing", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes)],
        declarations: [
          AppComponent,
          ListEmployeeComponent,
          WelcomeComponent,
          AddEmployeeComponent,
          EditEmployeeComponent
        ]
      }).compileComponents();

      router = TestBed.get(Router);
      location = TestBed.get(Location);

      fixture = TestBed.createComponent(AppComponent);
      router.initialNavigation();
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(
    'navigate to "" redirects you to /welcome',
    fakeAsync(() => {
      router.navigate([""]).then(() => {
        expect(location.path()).toBe("/welcome");
      });
    })
  );
});
