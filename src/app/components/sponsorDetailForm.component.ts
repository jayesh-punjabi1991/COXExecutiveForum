import { Component } from '@angular/core';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';

@Component({
  moduleId:module.id,
  selector: 'sponsorDetails',
  templateUrl: `sponsorDetailForm.component.html`,
  styleUrls:['../stylesheets/sponsorDetailForm.css'],
})
export class SponsorDetailComponent  {
  SponsorDetails: SponsorDetails;
  companyName:string;
  sponsorsName:string;
  emailAdd:string;
  tit:string;
  phoneNo:number;
  coxCont:string;
  companyAdd:string;
  cSZ:string;

  Confirm(){
    this.SponsorDetails = {
      name:this.sponsorsName,
      email:this.emailAdd,
      title:this.tit,
      company:this.companyName,
      phoneNumber:this.phoneNo,
      coxContact:this.coxCont,
      address:{
        companyAddress:this.companyAdd,
        cityStateZip:this.cSZ,
      }
    }
    console.log(this.SponsorDetails);
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
