import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlunoService} from "../service/aluno.service";
import {Aluno} from "../../domain/interface/aluno";
import {UserStatus} from "../../domain/enums/user_status.enum";
import {UserType} from "../../domain/enums/user_type.enum";

@Component({
  selector: 'app-aluno-register',
  templateUrl: './aluno-register.component.html',
  styleUrls: ['./aluno-register.component.css']
})
export class AlunoRegisterComponent {

  hide = true;
  maxDate: Date;
  form: FormGroup;
  @Input() error?: string | null;

  constructor(private fb: FormBuilder,
              private alunoService: AlunoService,
              private router: Router) {

    this.maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth() + 1, new Date().getDay());
    this.form = this.fb.group({
      nome: ['', Validators.required],
      genero: ['', Validators.required],
      login: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      senha: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      circAbdominal: ['', Validators.required]
    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  register() {
    const newAluno = this.form.getRawValue() as Aluno;
    newAluno.status = UserStatus.INATIVO;
    newAluno.tipo = UserType.ALUNO;
    newAluno.genero = +newAluno.genero;

    if (newAluno) {
      const result = this.alunoService.addAluno(newAluno)
        .subscribe(
          () => {
            console.log("Aluno cadastrado!");
            this.router.navigateByUrl('/').then(router => router);
          }
        );

      console.log(result);
    }
  }
}
