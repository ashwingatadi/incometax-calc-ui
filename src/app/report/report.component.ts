import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  constructor(private router: Router, public reportService: ReportService){
    if(this.reportService.fullname === undefined){
      this.router.navigate(['/'])
    }
  }
}
