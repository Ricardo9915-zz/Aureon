import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { ContentheaderComponent } from './components/contentheader/contentheader.component';
import { MainsidebarcontainerComponent } from './components/mainsidebarcontainer/mainsidebarcontainer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MaincontentComponent,
    ContentheaderComponent,
    MainsidebarcontainerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
