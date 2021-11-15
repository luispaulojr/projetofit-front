import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoRegisterComponent } from "./aluno-register/aluno-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AlunoPerfilComponent } from "./aluno-perfil/aluno-perfil.component";
import { MaterialModule } from "../modules/material.module";
import { IconsConstant } from "../domain/constants/icons.constant";

@NgModule({
  declarations: [AlunoRegisterComponent, AlunoPerfilComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconsConstant],
  providers: [],
})
export class AlunoModule {}
