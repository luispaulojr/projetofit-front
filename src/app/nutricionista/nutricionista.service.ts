import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {shareReplay} from "rxjs/operators";
import {Nutricionista} from "../domain/interface/nutricionista.model";

@Injectable({
  providedIn: "root",
})
export class NutricionistaService {
  constructor(private readonly http: HttpClient) {}

  addNutricionista(nutricionista: Nutricionista) {
    const headers = {
      "Content-Type": "application/json",
    };

    return this.http.post("http://localhost/api/nutricionista", JSON.stringify(nutricionista), {headers}).pipe(
        shareReplay(),
    );
  }
}
