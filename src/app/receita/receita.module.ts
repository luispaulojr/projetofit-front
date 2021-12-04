import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReceitaRegisterComponent } from "./receita-register/receita-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../modules/material.module";
import { IconsModule } from "../modules/icons.module";

@NgModule({
  declarations: [ReceitaRegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconsModule],
})
export class ReceitaModule {}
