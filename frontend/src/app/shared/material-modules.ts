import { NgModule } from "@angular/core";

import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";

const materialComponents = [MatExpansionModule, MatTableModule];

@NgModule({
  exports: materialComponents
})
export class MaterialModule {}
