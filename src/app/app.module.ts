import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgFondoHeaderComponent } from './components/img-fondo-header/img-fondo-header.component';
import { RedesSocComponent } from './components/redes-soc/redes-soc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgFondoHeaderComponent,
    RedesSocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
