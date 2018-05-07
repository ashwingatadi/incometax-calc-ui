import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { ReportComponent } from './report/report.component';
import {ReportService} from './report.service';

const appRoutes: Routes = [
	{path: '', component: UserInputsComponent},
	{path: 'report', component: ReportComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserInputsComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
