import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";
import { Professor } from "../../domain/interface/professor.model";

@Injectable({
  providedIn: "root",
})
export class ProfessorService {
  constructor(private readonly http: HttpClient) {}

  addProfessor(professor: Professor) {
    const headers = {
      "Content-Type": "application/json",
    };

    return this.http
      .post("http://localhost/api/professor", JSON.stringify(professor), {
        headers,
      })
      .pipe(shareReplay());
  }
}
