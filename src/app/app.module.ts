import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { ShowroomsComponent } from './pages/showrooms/showrooms.component';
import { ShowroompageComponent } from './pages/showroompage/showroompage.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DealerloginComponent } from './pages/dealerlogin/dealerlogin.component';
import { DealermenuComponent } from './pages/dealermenu/dealermenu.component';
import { DealermenupageComponent } from './pages/dealermenupage/dealermenupage.component';
import { DealershowroomsComponent } from './pages/dealershowrooms/dealershowrooms.component';
import { DealershowroompageComponent } from './pages/dealershowroompage/dealershowroompage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    ShowroomsComponent,
    ShowroompageComponent,
    RegisterComponent,
    LoginComponent,
    DealerloginComponent,
    DealermenuComponent,
    DealermenupageComponent,
    DealershowroomsComponent,
    DealershowroompageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
