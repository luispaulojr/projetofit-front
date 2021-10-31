import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoRegisterComponent } from './aluno-register.component';

describe('AlunoRegisterComponent', () => {
  let component: AlunoRegisterComponent;
  let fixture: ComponentFixture<AlunoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
