import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavlistComponent } from './components/navlist/navlist.component';
import { AboutComponent } from './pages/about/about.component';
import { SystemInfoComponent } from './pages/system-info/system-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SystemInfoComponent,
    NavlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
