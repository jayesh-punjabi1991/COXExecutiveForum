import { Component,OnInit } from '@angular/core';
import {PassService} from '../services/passData.service';

@Component({
  moduleId:module.id,
  selector: 'invoice',
  templateUrl: `invoice.component.html`,
  styleUrls:['../stylesheets/invoice.css','../stylesheets/printInvoice.css'],
  providers:[PassService]
})
export class InvoiceComponent  {
  SponsorDetails:SponsorDetails;
  constructor(public PassService:PassService){}
  ngOnInit(){
    this.PassService.SponsorData.subscribe(SponsorDetails=>console.log("Here"));
  }
  Print(){
    window.print();
  }
}
interface SponsorDetails{
  name:string;
  email:string;
  title:string;
  company:string;
  phoneNumber:number;
  coxContact:string;
  address:address;
 }
interface address{
  companyAddress:string;
  cityStateZip:string;
}
