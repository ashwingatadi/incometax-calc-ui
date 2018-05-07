import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService{
    fullname: string;
    payPeriod: string;
    grossIncome: number;
    incomeTax: number;
    netIncome: number;
    superAmount: number;

    constructor(private http: Http){

    }

    generateReport(firstname: string, lastname: string, annualSalary: number, superRate: number, reportDate: Date){
        this.fullname = firstname.trim() + ' ' + lastname.trim();
        this.payPeriod =  this.getPayPeriod(reportDate);
        this.grossIncome = Math.round(annualSalary/12);
        this.getIncomeTax(annualSalary).subscribe(
            (response:any) => {
                this.incomeTax = parseInt(response._body);
                this.netIncome = this.grossIncome - this.incomeTax;
            },
            (error)=>{
                console.log(error);
                
            }
        );
        
        this.superAmount = Math.round(this.grossIncome * superRate/100);
    }

    getPayPeriod(date: Date): string{
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var monthname = this.getMonthName(date.getMonth());

        return firstDay + ' ' + monthname + ' - ' + lastDay + ' ' + monthname + ', ' + date.getFullYear();
    }

    getMonthName(month: number): string{
        return [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ][month];
    }

    getIncomeTax(annualSalary: number){
        return this.http.get(`https://arcane-spire-97335.herokuapp.com/getIncomeTax/${annualSalary}`);
        //.map((response:any) => { this.incomeTax =  parseInt(response._body)}) ;
    }
}