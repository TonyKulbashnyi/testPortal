import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { StartRecruiterComponent } from './start/start-recruiter/start-recruiter.component';
import { StartSeekerComponent } from './start/start-seeker/start-seeker.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TopicsComponent } from './topics/topics.component';
import {LightComponent} from './light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    StartRecruiterComponent,
    StartSeekerComponent,
    MenuComponent,
    AboutUsComponent,
    TopicsComponent,
    LightComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
