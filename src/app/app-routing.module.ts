import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './private/login/login.component';
import { ContactComponent } from './public/contact/contact.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'private',
    children:[
      { path:'login',component: LoginComponent},
      {path: '', component: LoginComponent}
    ]
  },
  {
    path:'public', children:[
      { path:'dashboard', component: DashboardComponent},
      { path:'contact', component: ContactComponent},
      { path:'', component: DashboardComponent}
    ]
  },
  {path: '',redirectTo:'/private',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
