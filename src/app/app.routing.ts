import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent

  },
  {
    path: 'contact',
    component: ContactComponent
  }


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
