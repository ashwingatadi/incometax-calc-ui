import { Component } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private reportService: ReportService){
    
  }
  title = 'app';
}
