import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaerComponent } from './myComponent/heaer/heaer.component';
import { FooterComponent } from './myComponent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
