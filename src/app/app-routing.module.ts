import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';

const routes: Routes = [
  {
    path: 'about-us', // /about-us
    component: AboutUsComponent
  },
  {
    path: 'contact',
    // For redirection from route
    // redirectTo: '404'
    // Lazy loading: ContactModule
    loadChildren: () => import("./modules/contact/contact.module").then(module => module.ContactModule)
  },
  {
    path: '404',
    component: FilenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
