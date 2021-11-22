import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SerieDeExerciciosRegisterComponent } from "./serie-de-exercicios-register.component";

describe("SerieDeExerciciosRegisterComponent", () => {
  let component: SerieDeExerciciosRegisterComponent;
  let fixture: ComponentFixture<SerieDeExerciciosRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerieDeExerciciosRegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDeExerciciosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
