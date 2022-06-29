import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './private/login/login.component';
import { ContactComponent } from './public/contact/contact.component';
import { CoursComponent } from './public/cours/cours.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { ExercicesComponent } from './public/exercices/exercices.component';

const routes: Routes = [
  { path: 'public',
  children:[
    {path:'cours',component:CoursComponent},
    {path:'exercices',component:ExercicesComponent},
    {path:'',component:CoursComponent}
  ]},
  {path:'', redirectTo:'/private',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
