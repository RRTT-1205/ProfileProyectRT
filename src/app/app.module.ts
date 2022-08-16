import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgFondoHeaderComponent } from './components/img-fondo-header/img-fondo-header.component';
import { RedesSocComponent } from './components/redes-soc/redes-soc.component';
import { Profile1Component } from './components/profile1/profile1.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { Profile0Component } from './components/profile0/profile0.component';
import { PhotoComponent } from './components/photo/photo.component';
import { EducCertfComponent } from './components/educ-certf/educ-certf.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgFondoHeaderComponent,
    RedesSocComponent,
    Profile1Component,
    ExperienciaComponent,
    Profile0Component,
    PhotoComponent,
    EducCertfComponent,
    AptitudesComponent,
    RecomendacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
