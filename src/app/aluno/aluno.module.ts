import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoRegisterComponent } from './aluno-register/aluno-register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../modules/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AlunoRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,

  ]
})
export class AlunoModule { }
