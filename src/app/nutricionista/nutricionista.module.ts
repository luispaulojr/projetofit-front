import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NutricionistaRegisterComponent } from "./nutricionista-register/nutricionista-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NutricionistaPerfilComponent } from "./nutricionista-perfil/nutricionista-perfil.component";
import { MaterialModule } from "../modules/material.module";
import { IconsConstant } from "../domain/constants/icons.constant";

@NgModule({
  declarations: [NutricionistaRegisterComponent, NutricionistaPerfilComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconsConstant],
})
export class NutricionistaModule {}
