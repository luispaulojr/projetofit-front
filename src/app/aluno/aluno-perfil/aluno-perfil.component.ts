import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AlunoPerfilMock } from "../../domain/mocks/aluno.perfil.mock";

@Component({
  selector: "app-aluno-perfil",
  templateUrl: "./aluno-perfil.component.html",
  styleUrls: ["./aluno-perfil.component.css"],
})
export class AlunoPerfilComponent {
  options: FormGroup;
  dieta = AlunoPerfilMock.DIETA;
  aluno = AlunoPerfilMock.ALUNO;
  userStatus = new FormControl(this.aluno.status.toString());

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: this.userStatus,
    });
  }
}
