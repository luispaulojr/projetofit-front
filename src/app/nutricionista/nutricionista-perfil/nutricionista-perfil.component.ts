import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AlunoPerfilMock } from "../../domain/mocks/aluno.perfil.mock";
import { NutricionistaPerfilMock } from "../../domain/mocks/nutricionista.perfil.mock";

@Component({
  selector: "app-nutricionista-perfil",
  templateUrl: "./nutricionista-perfil.component.html",
  styleUrls: ["./nutricionista-perfil.component.css"],
})
export class NutricionistaPerfilComponent {
  options: FormGroup;
  dieta = AlunoPerfilMock.DIETA;
  nutricionista = NutricionistaPerfilMock.NUTRICIONISTA;
  userStatus = new FormControl(this.nutricionista.status.toString());

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: this.userStatus,
    });
  }
}
