import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { MyserviceService } from './myservice.service';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginformComponent } from './loginform/loginform.component';

const itiRoutes: Routes = [
  //{ path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'loginform', component:LoginformComponent   }



];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    ListComponent,
    LoginformComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      itiRoutes,
      // {enableTracing: true }
    ),
    HttpClientModule,
    FormsModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
