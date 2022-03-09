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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApikeyInterceptor } from './interceptors/apikey.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [CommonService, 
  {
    provide: HTTP_INTERCEPTORS, useClass: ApikeyInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
