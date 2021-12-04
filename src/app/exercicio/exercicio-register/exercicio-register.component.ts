import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Exercicio } from "../../domain/interface/exercicio.model";
import { ExercicioService } from "../service/exercicio.service";

@Component({
  selector: "app-exercicio-register",
  templateUrl: "./exercicio-register.component.html",
  styleUrls: ["./exercicio-register.component.css"],
})
export class ExercicioRegisterComponent {
  form: FormGroup;
  imageSrc = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ExercicioService
  ) {
    // eslint-disable-next-line no-mixed-spaces-and-tabs
    this.form = this.fb.group({
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      nome: ["", Validators.required],
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

  register2() {
    console.log(this.imageSrc);
  }

  register() {
    const newExercicio = this.form.getRawValue() as Exercicio;
    newExercicio.fotos = [];
    // const exercicioImg = this.imageSrc.replace("data:image/jpeg;base64,", "");
    newExercicio.fotos.push(this.imageSrc);

    if (newExercicio) {
      const result = this.service.addExercicio(newExercicio).subscribe(() => {
        this.router.navigateByUrl("/").then((router) => router);
      });

      console.log(newExercicio);
    }
  }
}
