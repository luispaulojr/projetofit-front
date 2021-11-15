import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { AlunoRegisterComponent } from "./aluno/aluno-register/aluno-register.component";
import { ProfessorRegisterComponent } from "./professor/professor-register/professor-register.component";
import { NutricionistaRegisterComponent } from "./nutricionista/nutricionista-register/nutricionista-register.component";
import { ProfessorPerfilComponent } from "./professor/professor-perfil/professor-perfil.component";
import { AlunoPerfilComponent } from "./aluno/aluno-perfil/aluno-perfil.component";
import { NutricionistaPerfilComponent } from "./nutricionista/nutricionista-perfil/nutricionista-perfil.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "aluno/register", component: AlunoRegisterComponent },
  { path: "aluno/perfil", component: AlunoPerfilComponent },
  { path: "professor/register", component: ProfessorRegisterComponent },
  { path: "professor/perfil", component: ProfessorPerfilComponent },
  { path: "nutricionista/register", component: NutricionistaRegisterComponent },
  { path: "nutricionista/perfil", component: NutricionistaPerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
