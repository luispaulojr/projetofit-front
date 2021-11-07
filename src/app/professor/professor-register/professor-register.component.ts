import {Component, Input} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserStatus} from "../../domain/enums/user_status.enum";
import {UserType} from "../../domain/enums/user_type.enum";
import {Professor} from "../../domain/interface/professor.model";
import {ProfessorService} from "../service/professor.service";
import {GeneroType} from "../../domain/enums/genero_type.enum";

@Component({
  selector: "app-professor-register",
  templateUrl: "./professor-register.component.html",
  styleUrls: ["./professor-register.component.css"],
})
export class ProfessorRegisterComponent {
  hide = true;
  maxDate: Date;
  form: FormGroup;
  @Input() error?: string | null;

  constructor(private fb: FormBuilder,
              private professorService: ProfessorService,
              private router: Router) {
    this.maxDate = new Date(new Date().getFullYear() - 18,
        new Date().getMonth() + 1, new Date().getDay());
    this.form = this.fb.group({
      nome: ["", Validators.required],
      genero: ["", Validators.required],
      login: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      telefone: ["", Validators.required],
      dataNascimento: ["", Validators.required],
      senha: ["", Validators.required],
      cref: ["",
        [
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
          Validators.required],
      ],
      razaoSocial: ["", Validators.required],
      cnpj: ["", Validators.required],
      logradouro: ["", Validators.required],
      bairro: ["", Validators.required],
      cidade: ["", Validators.required],
    });
  }

  register() {
    const newProfessor =
      ProfessorRegisterComponent.converter(this.form.getRawValue());

    if (newProfessor) {
      const result = this.professorService.addProfessor(newProfessor)
          .subscribe(
              () => {
                this.router.navigateByUrl("/").then((router) => router);
              },
          );

      console.log(result);
    }
  }

  private static converter(rawValue: any) : Professor {
    return {
      nome: rawValue.nome,
      genero: +rawValue.genero,
      login: rawValue.login,
      senha: rawValue.senha,
      email: rawValue.email,
      telefone: rawValue.telefone,
      tipo: UserType.PROFESSOR,
      status: UserStatus.INATIVO,
      dataNascimento: rawValue.dataNascimento,
      cref: rawValue.cref,
      academiaFiliada: {
        razaoSocial: rawValue.razaoSocial,
        cnpj: rawValue.cnpj,
        endereco: {
          logradouro: rawValue.logradouro,
          bairro: rawValue.bairro,
          cidade: rawValue.cidade,
        },
      },
    };
  }
}
