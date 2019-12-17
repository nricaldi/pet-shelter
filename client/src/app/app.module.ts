import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { PetsComponent } from './pets/pets.component';
import { EditComponent } from './edit/edit.component';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    PetsComponent,
    EditComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
