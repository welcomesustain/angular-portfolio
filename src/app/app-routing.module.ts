import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { PersonalBioComponent } from './personal-bio/personal-bio.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: FirstComponent },
  {path:'personalBio',component:PersonalBioComponent},
  {path:'contact',component:ContactComponent},
  {path:'education',component:EducationComponent},
  {path:'hobbies',component:HobbiesComponent},
  {path:'email',component:ContactFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
