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
import {ThemeService} from './theme.service';
import {ReactiveFormsModule} from '@angular/forms';
import { TestListComponent } from './test-list/test-list.component';
import { TestComponent } from './test/test.component';
import { TestResultComponent } from './test-result/test-result.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { TestCreateComponent } from './test-create/test-create.component';

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
    LightComponent,
    TestListComponent,
    TestComponent,
    TestResultComponent,
    ProfileComponent,
    ResultsComponent,
    AssessmentComponent,
    TestCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
