import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorRegisterComponent } from "./professor-register/professor-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfessorPerfilComponent } from "./professor-perfil/professor-perfil.component";
import { MaterialModule } from "../modules/material.module";
import { IconsModule } from "../modules/icons.module";

@NgModule({
  declarations: [ProfessorRegisterComponent, ProfessorPerfilComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconsModule],
})
export class ProfessorModule {}
