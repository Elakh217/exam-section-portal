import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './ngMaterial/material.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { Routes, RouterModule } from '@angular/router';


import { StudentMarksComponent} from './student-page/student-marks/student-marks.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { MarksComponent } from './staff-page/marks/marks.component';
import { ViewMarksComponent } from './staff-page/view-marks/view-marks.component';
import { EndDateEntryComponent } from './staff-page/end-date-entry/end-date-entry.component';
import { ViewResultComponent } from './staff-page/view-result/view-result.component';
import { UpdateResultComponent } from './staff-page/update-result/update-result.component';
import { ModelTypeComponent } from './staff-page/model-type/model-type.component';
import { RegisterNoComponent } from './staff-page/register-no/register-no.component';
import { BonusRemovalComponent } from './staff-page/bonus-removal/bonus-removal.component';
import { StudentNoComponent } from './staff-page/student-no/student-no.component';
import { ModelLabComponent } from './staff-page/model-lab/model-lab.component';
import { CircularComponent } from './staff-page/circular/circular.component';
import { EventsComponent } from './staff-page/events/events.component';
import { ResultAnalysisComponent } from './staff-page/result-analysis/result-analysis.component';
import { MarkReportComponent } from './staff-page/mark-report/mark-report.component';
import { BonusReportComponent } from './staff-page/bonus-report/bonus-report.component';
import { UploadComponent } from './staff-page/upload/upload.component';



const appRoutes: Routes = [
  {path: '', component:  StaffPageComponent },
  {path: 'marks', component: MarksComponent},
  {path: 'viewmarks', component: ViewMarksComponent},
  {path: 'enddate', component:EndDateEntryComponent },
  {path: 'viewresult', component: ViewResultComponent },
  {path: 'updateresult', component:  UpdateResultComponent },
  {path: 'modeltype', component:  ModelTypeComponent },
  {path: 'registerno', component:  RegisterNoComponent },
  {path: 'bonusremoval', component:   BonusRemovalComponent },
  {path: 'studentno', component:   StudentNoComponent },
  {path: 'modellab', component:  ModelLabComponent },
  {path: 'circular', component:  CircularComponent },
  {path: 'events', component:   EventsComponent },
  {path: 'analysis', component:    ResultAnalysisComponent },
  {path: 'markreport', component:    MarkReportComponent },
  {path: 'bonus', component:    BonusReportComponent  },
  {path: 'upload', component:   UploadComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentMarksComponent,
    StaffPageComponent,
    FooterComponent,
    HeaderComponent,
    MarksComponent,
    ViewMarksComponent,
    EndDateEntryComponent,
    ViewResultComponent,
    UpdateResultComponent,
    ModelTypeComponent,
    RegisterNoComponent,
    BonusRemovalComponent,
    StudentNoComponent,
    ModelLabComponent,
    CircularComponent,
    EventsComponent,
    ResultAnalysisComponent,
    MarkReportComponent,
    BonusReportComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
