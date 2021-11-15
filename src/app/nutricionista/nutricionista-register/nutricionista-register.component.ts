import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NutricionistaService } from "../nutricionista.service";
import { UserType } from "../../domain/enums/user_type.enum";
import { UserStatus } from "../../domain/enums/user_status.enum";
import { Nutricionista } from "../../domain/interface/nutricionista.model";

@Component({
  selector: "app-nutricionista-register",
  templateUrl: "./nutricionista-register.component.html",
  styleUrls: ["./nutricionista-register.component.css"],
})
export class NutricionistaRegisterComponent {
  hide = true;
  maxDate: Date;
  form: FormGroup;
  @Input() error?: string | null;

  constructor(
    private fb: FormBuilder,
    private nutricionistaService: NutricionistaService,
    private router: Router
  ) {
    this.maxDate = new Date(
      new Date().getFullYear() - 18,
      new Date().getMonth() + 1,
      new Date().getDay()
    );
    this.form = this.fb.group({
      nome: ["", Validators.required],
      genero: ["", Validators.required],
      login: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      telefone: ["", Validators.required],
      dataNascimento: ["", Validators.required],
      senha: ["", Validators.required],
      crn: ["", [Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.required]],
      logradouro: ["", Validators.required],
      bairro: ["", Validators.required],
      cidade: ["", Validators.required],
    });
  }

  register() {
    const newNutricionista = NutricionistaRegisterComponent.converter(
      this.form.getRawValue()
    );

    if (newNutricionista) {
      const result = this.nutricionistaService
        .addNutricionista(newNutricionista)
        .subscribe(() => {
          this.router.navigateByUrl("/").then((router) => router);
        });

      console.log(result);
    }
  }

  private static converter(rawValue: any): Nutricionista {
    return {
      nome: rawValue.nome,
      genero: +rawValue.genero,
      login: rawValue.login,
      senha: rawValue.senha,
      email: rawValue.email,
      telefone: rawValue.telefone,
      tipo: UserType.NUTRICIONISTA,
      status: UserStatus.INATIVO,
      dataNascimento: rawValue.dataNascimento,
      crn: rawValue.crn,
      consultorio: {
        logradouro: rawValue.logradouro,
        bairro: rawValue.bairro,
        cidade: rawValue.cidade,
      },
    };
  }
}
