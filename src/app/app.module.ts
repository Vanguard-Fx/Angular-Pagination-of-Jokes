import { ReversePipe } from './pipes/reverse.pipe';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { TitoloComponent } from './titolo/titolo.component';
import { ContenutoComponent } from './contenuto/contenuto.component';
import { BottoneComponent } from './bottone/bottone.component';
import { RouterModule, Routes } from '@angular/router';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';

const routes: Routes = [
  {
    path: 'page',
    component: PaginaComponent,
  },
  {
    path: 'reverse',
    component: ReverseStringComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    TitoloComponent,
    ContenutoComponent,
    BottoneComponent,
    ReverseStringComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
