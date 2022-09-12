import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion3Component } from './seccion3/seccion3.component';
import { Seccion4Component } from './seccion4/seccion4.component';
import { Seccion5Component } from './seccion5/seccion5.component';
import { Seccion6Component } from './seccion6/seccion6.component';
import { Seccion7Component } from './seccion7/seccion7.component';
import { Seccion8Component } from './seccion8/seccion8.component';
import { Seccion9Component } from './seccion9/seccion9.component';
import { Seccion10Component } from './seccion10/seccion10.component';
import { Seccion11Component } from './seccion11/seccion11.component';
import { Seccion12Component } from './seccion12/seccion12.component';
import { Seccion13Component } from './seccion13/seccion13.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    ContenidoComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    Seccion5Component,
    Seccion6Component,
    Seccion7Component,
    Seccion8Component,
    Seccion9Component,
    Seccion10Component,
    Seccion11Component,
    Seccion12Component,
    Seccion13Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
