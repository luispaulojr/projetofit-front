import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExercicioRegisterComponent } from "./exercicio-register/exercicio-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../modules/material.module";
import { IconsModule } from "../modules/icons.module";

@NgModule({
  declarations: [ExercicioRegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconsModule],
})
export class ExercicioModule {}
