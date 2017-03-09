import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { tela } from './tela-inicial/tela.component';
import { MeucliComponent } from './meucli/meucli.component';

@NgModule({
  declarations: [
    AppComponent,
    tela,
    MeucliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
