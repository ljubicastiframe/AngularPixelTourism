import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ListaPutovanjaComponent } from './lista-putovanja/lista-putovanja.component';
import { SignupComponent } from './signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetaljiPutovanjaComponent } from './detalji-putovanja/detalji-putovanja.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { KorpaComponent } from './korpa/korpa.component';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ListaPutovanjaComponent,
    DetaljiPutovanjaComponent,
    WelcomeComponent,
    TopBarComponent,
    KorpaComponent,
    ProfileComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatDialogModule,
    HttpClientModule                                                                  
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ProfileComponent]
})
export class AppModule { }
