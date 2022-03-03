import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactRoutingModule } from './contact-routing/contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    // You may not need both of these following modules
    ReactiveFormsModule, // For Reactive Forms
    FormsModule // For Template Driven Forms
  ]
})
export class ContactModule { }
