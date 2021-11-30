import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { TtaalComponent } from './components/ttaal/ttaal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    NavComponent,
    TtaalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
