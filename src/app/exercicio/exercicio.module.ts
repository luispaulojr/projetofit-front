import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { ExercicioRegisterComponent } from "./exercicio-register/exercicio-register.component";

@NgModule({
  declarations: [RegisterComponent, ExercicioRegisterComponent],
  imports: [CommonModule],
})
export class ExercicioModule {}
