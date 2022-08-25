import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactNewComponent} from "./contact-new/contact-new.component";
import {LayoutComponent} from "./layout/layout.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {ContactEditComponent} from "./contact-edit/contact-edit.component";
import {AuthGuard} from "./auth-guard.sevice";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'contacts',
    component: LayoutComponent,
    canActivate:[AuthGuard],
    children: [{
      path: '',
      component: ContactListComponent
    },{
      path:'new',
      component:ContactNewComponent
    },
      {
        path:'edit',
        component:ContactEditComponent
      }]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {
}
