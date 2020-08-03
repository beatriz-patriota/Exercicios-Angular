import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { SomardiminuirComponent } from './somardiminuir/somardiminuir.component';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HighContrastModeDetector, FocusMonitor } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { ContentObserver } from '@angular/cdk/observers';
import {MatInputModule} from '@angular/material/input';
import { AutofillMonitor } from '@angular/cdk/text-field';
@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    SomardiminuirComponent,
    JurosCompostosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [HighContrastModeDetector, Platform, FocusMonitor,ViewportRuler,ContentObserver,AutofillMonitor],
  bootstrap: [AppComponent]
})
export class AppModule { }
