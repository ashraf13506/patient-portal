import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },{
  path:'homepage',
  component:HomepageComponent
}];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
