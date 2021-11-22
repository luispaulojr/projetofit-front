import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExercicioRegisterComponent } from "./exercicio-register.component";

describe("ExercicioRegisterComponent", () => {
  let component: ExercicioRegisterComponent;
  let fixture: ComponentFixture<ExercicioRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercicioRegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
