import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortafolioComponent,
    NavBarComponent,
    SkillsetComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
