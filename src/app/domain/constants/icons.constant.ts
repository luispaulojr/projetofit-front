import { NgModule } from "@angular/core";
import { Icons } from "../icons.constants";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@NgModule({
  exports: [],
})
export class IconsConstant {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      "weight-kg",
      sanitizer.bypassSecurityTrustHtml(Icons.WEIGHT_KILOGRAM)
    );

    iconRegistry.addSvgIconLiteral(
      "human-male-height",
      sanitizer.bypassSecurityTrustHtml(Icons.HUMAN_MALE_HEIGHT)
    );

    iconRegistry.addSvgIconLiteral(
      "measuring-tape",
      sanitizer.bypassSecurityTrustHtml(Icons.MEASURING_TAPE)
    );

    iconRegistry.addSvgIconLiteral(
      "salad",
      sanitizer.bypassSecurityTrustHtml(Icons.SALAD)
    );

    iconRegistry.addSvgIconLiteral(
      "heartbeat",
      sanitizer.bypassSecurityTrustHtml(Icons.HEARTBEAT)
    );

    iconRegistry.addSvgIconLiteral(
      "dumbbell",
      sanitizer.bypassSecurityTrustHtml(Icons.DUMBBELL)
    );
  }
}
