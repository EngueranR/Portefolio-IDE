import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WindowIdeComponent } from './window-ide/window-ide.component';
import { NavWindowComponent } from './navigation/nav-window/nav-window.component';
import { NavFileLeftComponent } from './navigation/nav-file-left/nav-file-left.component';
import { ExperiencesComponent } from './file/experiences/experiences.component';
import { AppRoutingModule } from './app-routing.module';
import { CursusComponent } from './file/cursus/cursus.component';
import { ContactComponent } from './file/contact/contact.component';
import { MainComponent } from './file/main/main.component';
import { SkillsComponent } from './file/skills/skills.component';
import { JsonExperienceComponent } from './fileJson/json-experience/json-experience.component';
import { JsonCursusComponent } from './fileJson/json-cursus/json-cursus.component';
import { JsonSkillComponent } from './fileJson/json-skill/json-skill.component';
import { JsonContactComponent } from './fileJson/json-contact/json-contact.component';
import { ConsoleComponent } from './console/console.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    WindowIdeComponent,
    NavWindowComponent,
    NavFileLeftComponent,
    ExperiencesComponent,
    CursusComponent,
    ContactComponent,
    MainComponent,
    SkillsComponent,
    JsonExperienceComponent,
    JsonCursusComponent,
    JsonSkillComponent,
    JsonContactComponent,
    ConsoleComponent

  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
