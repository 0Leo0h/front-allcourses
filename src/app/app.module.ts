import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterTutorComponent } from './register-tutor/register-tutor.component';
import { PeticionComponent } from './peticion/peticion.component';
import { PeticionesComponent } from './peticiones/peticiones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterTutorComponent,
    PeticionComponent,
    PeticionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxYoutubePlayerModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
