import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { NoteComponent } from 'src/pages/note/note.component';
import { helpComponent } from 'src/pages/help/help.component';
import { nivelesEmergenciaComponent } from 'src/pages/nivelesEmergencia/nivelesEmergencia.component';
import { reclamosSugerenciasComponent } from 'src/pages/reclamosSugerencias/reclamosSugerencias.component';
import { asistenciaTelefonicaComponent } from 'src/pages/asistenciaTelefonica/asistenciaTelefonica.component';
import { mapsComponent } from 'src/pages/maps/maps.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { RegistroComponent } from 'src/pages/registro/registro.component';
import { PersonaService } from 'src/servicio/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MainComponent,
    NoteComponent,
    helpComponent,
    nivelesEmergenciaComponent,
    reclamosSugerenciasComponent,
    asistenciaTelefonicaComponent,
    mapsComponent,
    
  ],


  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],

  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
    },
    PersonaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
