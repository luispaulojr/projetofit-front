import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DietaRegisterComponent } from "./dieta-register.component";

describe("DietaRegisterComponent", () => {
  let component: DietaRegisterComponent;
  let fixture: ComponentFixture<DietaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DietaRegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
