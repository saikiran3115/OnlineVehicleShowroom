import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowroompageComponent } from './pages/showroompage/showroompage.component';
import { ShowroomsComponent } from './pages/showrooms/showrooms.component';
import { LoginComponent } from './pages/login/login.component';
import { DealerloginComponent } from './pages/dealerlogin/dealerlogin.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'showrooms',component:ShowroomsComponent},
  {path:'showrooms/:id',component:ShowroompageComponent},
  {path:'dealerlogin/:id',component:DealerloginComponent},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'dealerlogin',component:DealerloginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
