import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './services/home.service';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './Home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule, // Import SharedModule for NavbarComponent and FooterComponent
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
