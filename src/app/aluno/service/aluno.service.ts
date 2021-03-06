import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";
import { Aluno } from "../../domain/interface/aluno.model";

@Injectable({
  providedIn: "root",
})
export class AlunoService {
  constructor(private readonly http: HttpClient) {}

  addAluno(aluno: Aluno) {
    const headers = {
      "Content-Type": "application/json",
    };

    return this.http
      .post("http://localhost/api/aluno", JSON.stringify(aluno), { headers })
      .pipe(shareReplay());
  }
}
