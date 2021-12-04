import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth/service/auth.service";
import { AlunoModule } from "./aluno/aluno.module";
import { MaterialModule } from "./modules/material.module";
import { AuthModule } from "./auth/auth.module";
import { ProfessorModule } from "./professor/professor.module";
import { NutricionistaModule } from "./nutricionista/nutricionista.module";
import { IconsModule } from "./modules/icons.module";
import { ExercicioModule } from "./exercicio/exercicio.module";
import { ReceitaModule } from "./receita/receita.module";
import { SerieDeExerciciosModule } from "./serie-de-exercicios/serie-de-exercicios.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    AlunoModule,
    ProfessorModule,
    NutricionistaModule,
    ExercicioModule,
    ReceitaModule,
    SerieDeExerciciosModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    MaterialModule,
    IconsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
