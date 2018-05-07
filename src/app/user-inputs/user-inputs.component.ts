import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { ReportService } from '../report.service';


@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})
export class UserInputsComponent implements AfterViewChecked {

  @ViewChild('calendar') calendar: any;
  @ViewChild('f') form: NgForm; 

  constructor(private router: Router, private reportService: ReportService){
    
  }

  ngAfterViewChecked(){
      if(this.calendar.el.nativeElement.classList.value.includes("ng-invalid") 
        && 
        this.calendar.el.nativeElement.classList.value.includes("ng-touched")){
          this.calendar.inputfieldViewChild.nativeElement.style.border = "1px solid red";
      }
      else{
        this.calendar.inputfieldViewChild.nativeElement.style.border = "";      
      }
  }
  
  onSubmit(){
    
    var invalid: boolean = false;
    invalid = this.form.value.annualSalary <0 || invalid
    if(invalid){
      this.form.controls.annualSalary.setErrors({'incorrect': true});
    }

    invalid = this.form.value.superRate < 0 || this.form.value.superRate > 12 || invalid
    if(invalid){
      this.form.controls.superRate.setErrors({'incorrect': true});
    }

    if(!invalid){
      console.log(this.form);
      this.reportService.generateReport(this.form.value.firstName, 
        this.form.value.lastName, 
        this.form.value.annualSalary, 
        this.form.value.superRate,
        this.form.value.paymentStartDate)
      this.router.navigate(['/report'])
    }

  }

}
