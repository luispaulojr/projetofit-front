import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";
import { SerieDeExercicios } from "../../domain/interface/serie-de-exercicios.model";

@Injectable({
  providedIn: "root",
})
export class SerieDeExerciciosService {
  constructor(private readonly http: HttpClient) {}

  addSerie(serieDeExercicios: SerieDeExercicios) {
    const headers = {
      "Content-Type": "application/json",
    };

    return this.http
      .post(
        "http://localhost/api/exercicio",
        JSON.stringify(serieDeExercicios),
        { headers }
      )
      .pipe(shareReplay());
  }
}
