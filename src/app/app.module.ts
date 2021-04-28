import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NumberInputComponent,
    CodeGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
