import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListaPutovanjaComponent } from './lista-putovanja/lista-putovanja.component';
import { DetaljiPutovanjaComponent } from './detalji-putovanja/detalji-putovanja.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { KorpaComponent } from './korpa/korpa.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'lista-putovanja', component: ListaPutovanjaComponent },
  { path: 'putovanja/:putovanjeId', component: DetaljiPutovanjaComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'korpa', component: KorpaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
