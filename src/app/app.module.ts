import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomCardComponent } from './shared/custom-card/custom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CustomCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
