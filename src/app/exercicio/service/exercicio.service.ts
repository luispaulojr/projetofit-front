import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";
import { Exercicio } from "../../domain/interface/exercicio.model";

@Injectable({
  providedIn: "root",
})
export class ExercicioService {
  constructor(private readonly http: HttpClient) {}

  addExercicio(exercicio: Exercicio) {
    const headers = {
      "Content-Type": "application/json",
    };

    return this.http
      .post("http://localhost/api/exercicio", JSON.stringify(exercicio), {
        headers,
      })
      .pipe(shareReplay());
  }
}
