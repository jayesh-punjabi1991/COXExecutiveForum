import { Component } from '@angular/core';
import {PassService} from '../services/passData.service';

@Component({
  moduleId:module.id,
  selector: 'invoice',
  templateUrl: `invoice.component.html`,
  styleUrls:['../stylesheets/invoice.css','../stylesheets/printInvoice.css'],
  providers:[PassService]
})
export class InvoiceComponent {
  SponsorDetails:SponsorDetails;
  invoiceDateTemp:Date;
  invoiceDate:string;
  invoiceNumber:string;
  companyAddress:string;
  cityStateZip:string;
  name:string;
  constructor(public PassService:PassService){
    this.SponsorDetails=JSON.parse(this.PassService.getSponsorDetail());
    this.invoiceDateTemp=new Date(this.SponsorDetails.registrationDate);
    this.invoiceDate=this.invoiceDateTemp.getMonth() + 1 + '/' + this.invoiceDateTemp.getDate() + '/' +  this.invoiceDateTemp.getFullYear();
    this.invoiceNumber=this.SponsorDetails.registrationNumber;
    this.companyAddress=this.SponsorDetails.user.address.companyAddress;
    this.cityStateZip=this.SponsorDetails.user.address.cityStateZip;
    this.name=this.SponsorDetails.user.name;
  }
  Print(){
    window.print();
  }
}
interface SponsorDetails{
  registrationDate:number;
  registrationNumber:string;
  user:user;
}
interface user{
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
