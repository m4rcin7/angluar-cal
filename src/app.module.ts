import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({ 
  declarations: [HeaderComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
