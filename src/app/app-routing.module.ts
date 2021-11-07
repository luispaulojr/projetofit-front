import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./auth/login/login.component";
import {AlunoRegisterComponent} from "./aluno/aluno-register/aluno-register.component";
import {ProfessorRegisterComponent} from "./professor/professor-register/professor-register.component";
import {NutricionistaRegisterComponent} from "./nutricionista/nutricionista-register/nutricionista-register.component";

const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "login", component: LoginComponent},
  {path: "aluno/register", component: AlunoRegisterComponent},
  {path: "professor/register", component: ProfessorRegisterComponent},
  {path: "nutricionista/register", component: NutricionistaRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
