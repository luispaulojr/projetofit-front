import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoRegisterComponent } from "./aluno-register/aluno-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AlunoPerfilComponent } from "./aluno-perfil/aluno-perfil.component";
import { MaterialModule } from "../modules/material.module";
import { IconsModule } from "../modules/icons.module";

@NgModule({
  declarations: [AlunoRegisterComponent, AlunoPerfilComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconsModule],
  providers: [],
})
export class AlunoModule {}
