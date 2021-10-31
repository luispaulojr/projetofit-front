import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import {AlunoRegisterComponent} from "./aluno/aluno-register/aluno-register.component";

const routes: Routes = [
  { path : '', component : AppComponent },
  { path : 'login', component : LoginComponent },
  { path : 'aluno/register', component : AlunoRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
