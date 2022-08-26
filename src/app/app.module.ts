import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactNewComponent} from './contact-new/contact-new.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import {TagListComponent} from './tag-list/tag-list.component';
import {TagNewComponent} from './tag-new/tag-new.component';
import {TagEditComponent} from './tag-edit/tag-edit.component';
import {LayoutComponent} from './layout/layout.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GolbalInterceptor} from "./global.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SigninComponent,
    SignupComponent,
    ContactListComponent,
    ContactNewComponent,
    ContactEditComponent,
    TagListComponent,
    TagNewComponent,
    TagEditComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GolbalInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
