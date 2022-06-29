import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './private/login/login.component';
import { ContactComponent } from './public/contact/contact.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'public', loadChildren:() =>import('./public/public.module').then((m) => m.PublicModule)},
  { path: 'private', loadChildren:() =>import('./private/private.module').then((m) => m.PrivateModule)},
  {path:'', redirectTo:'/private',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
