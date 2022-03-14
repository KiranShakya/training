import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';
import { ContactGuard } from './guards/contact.guard';

const routes: Routes = [
  {
    path: 'about-us/:id', // /about-us
    component: AboutUsComponent,
    canActivate: [ContactGuard]
  },
  {
    path: 'contact',
    // For redirection from route
    // redirectTo: '404'
    // Lazy loading: ContactModule
    loadChildren: () => import("./modules/contact/contact.module").then(module => module.ContactModule),
    canLoad: [ContactGuard],
    data: { someData: true}
  },
  {
    path: '404',
    component: FilenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
