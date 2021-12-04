import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: "app-receita-register",
  templateUrl: "./receita-register.component.html",
  styleUrls: ["./receita-register.component.css"],
})
export class ReceitaRegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nome: ["", Validators.required],
      refeicao: ["", Validators.required],
      horario: ["", Validators.required],
      objetivo: ["", Validators.required],
    });
  }

  register() {}
}
