import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AlunoPerfilMock } from "../../domain/mocks/aluno.perfil.mock";
import { ProfessorPerfilMock } from "../../domain/mocks/professor.perfil.mock";

@Component({
  selector: "app-professor-perfil",
  templateUrl: "./professor-perfil.component.html",
  styleUrls: ["./professor-perfil.component.css"],
})
export class ProfessorPerfilComponent {
  options: FormGroup;
  dieta = AlunoPerfilMock.DIETA;
  professor = ProfessorPerfilMock.PROFESSOR;
  userStatus = new FormControl(this.professor.status.toString());

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: this.userStatus,
    });
  }
}
