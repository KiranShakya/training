import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './directives/custom.directive';
import { SentenceCasePipe } from './pipes/sentence-case.pipe';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';
import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CustomDirective,
    SentenceCasePipe,
    AboutUsComponent,
    FilenotfoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
