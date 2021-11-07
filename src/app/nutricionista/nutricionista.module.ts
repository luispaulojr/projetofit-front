import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NutricionistaRegisterComponent} from "./nutricionista-register/nutricionista-register.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../modules/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    NutricionistaRegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatDividerModule,
  ],
})
export class NutricionistaModule { }
