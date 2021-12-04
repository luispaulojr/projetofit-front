import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SerieDeExerciciosRegisterComponent } from "./serie-de-exercicios-register/serie-de-exercicios-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../modules/material.module";
import { IconsModule } from "../modules/icons.module";

@NgModule({
  declarations: [SerieDeExerciciosRegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconsModule],
})
export class SerieDeExerciciosModule {}
