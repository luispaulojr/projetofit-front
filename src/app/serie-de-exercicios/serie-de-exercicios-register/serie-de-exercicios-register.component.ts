import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ExercicioStatus } from "../../domain/enums/exercicio_status.enum";
import { SerieDeExerciciosService } from "../service/serie-de-exercicios.service";
import { SerieDeExercicios } from "../../domain/interface/serie-de-exercicios.model";

@Component({
  selector: "app-serie-de-exercicios-register",
  templateUrl: "./serie-de-exercicios-register.component.html",
  styleUrls: ["./serie-de-exercicios-register.component.css"],
})
export class SerieDeExerciciosRegisterComponent {
  form: FormGroup;
  imageSrc = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SerieDeExerciciosService
  ) {
    // eslint-disable-next-line no-mixed-spaces-and-tabs
    this.form = this.fb.group({
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      nome: ["", Validators.required],
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      status: [ExercicioStatus.ATIVO.toString(), Validators.required],
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      nomeExercicio: ["", Validators.required],
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      musculo: ["", Validators.required],
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      repeticoes: ["", Validators.required],
      // eslint-disable-next-line no-mixed-spaces-and-tabs
    });
  }

  handleInputChange(e: any) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  private _handleReaderLoaded = (e: { target: any }) => {
    const reader = e.target;
    this.imageSrc = reader.result;
  };

  register() {
    const newSerie = this.form.getRawValue() as SerieDeExercicios;
    newSerie.exercicios = [];
    newSerie.professorId = 2;

    // if (newSerie) {
    // 	const result = this.service.addSerie(newSerie).subscribe(() => {
    // 		this.router.navigateByUrl("/").then((router) => router);
    // 	});
    // }

    console.log(JSON.stringify(newSerie));
  }
}
