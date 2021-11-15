import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NutricionistaRegisterComponent } from "./nutricionista-register.component";

describe("NutricionistaRegisterComponent", () => {
  let component: NutricionistaRegisterComponent;
  let fixture: ComponentFixture<NutricionistaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutricionistaRegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionistaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
