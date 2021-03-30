import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './page/signup/signup.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContantDetailsComponent } from './pages/contant-details/contant-details.component';
import { ContantPageComponent } from './pages/contant-page/contant-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { UserResolverService } from './services/user-resolver/user-resolver.component';

const routes: Routes = [
  { path: 'contact/:id', component: ContantDetailsComponent, resolve: { contact: ContactResolverService }, runGuardsAndResolvers: 'paramsChange' },
  { path: 'contact', component: ContantPageComponent },
  { path: 'edit/:id', runGuardsAndResolvers: 'paramsChange', resolve: { contact: ContactResolverService }, component: ContactEditComponent },
  { path: 'edit', runGuardsAndResolvers: 'paramsChange', component: ContactEditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'home/:id',  component: HomePageComponent },
  { path: 'home/:id', resolve: { user: UserResolverService }, component: HomePageComponent },
  { path: '', redirectTo:"login" ,pathMatch:'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
