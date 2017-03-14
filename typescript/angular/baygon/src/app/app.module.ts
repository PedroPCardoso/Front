import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { tela } from './tela-inicial/tela.component';
import { MeucliComponent } from './meucli/meucli.component';
import { TestComponent } from './test/test.component';
import {TestService} from './test/test.service';
@NgModule({
  declarations: [
    AppComponent,
    tela,
    MeucliComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
