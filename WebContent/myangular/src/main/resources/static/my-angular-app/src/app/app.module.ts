import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'contact',      component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes, { enableTracing: true })     
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
