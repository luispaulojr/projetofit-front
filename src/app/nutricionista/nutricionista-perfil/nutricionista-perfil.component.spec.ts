import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NutricionistaPerfilComponent } from "./nutricionista-perfil.component";

describe("NutricionistaPerfilComponent", () => {
  let component: NutricionistaPerfilComponent;
  let fixture: ComponentFixture<NutricionistaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutricionistaPerfilComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionistaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
