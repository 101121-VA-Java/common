import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AboutmeComponent } from './components/aboutme/aboutme.component';
import { TtaalComponent } from './components/ttaal/ttaal.component';


const routes: Routes = [{
  path: '',
  component: AboutmeComponent
}, {
  path: 'ttaal',
  component: TtaalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }