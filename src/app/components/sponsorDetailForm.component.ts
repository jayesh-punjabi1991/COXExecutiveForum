import { Component,OnInit } from '@angular/core';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';
import {AddService} from '../services/addSponsor.service';
import {PassService} from '../services/passData.service';

@Component({
  moduleId:module.id,
  selector: 'sponsorDetails',
  templateUrl: `sponsorDetailForm.component.html`,
  styleUrls:['../stylesheets/sponsorDetailForm.css'],
  providers: [AddService,PassService]
})
export class SponsorDetailComponent implements OnInit {
  SponsorDetails: SponsorDetails;
  companyName:string;
  sponsorsName:string;
  emailAdd:string;
  tit:string;
  phoneNo:number;
  coxCont:string;
  companyAdd:string;
  cSZ:string;
  returnSponsorDetails:string[];

  constructor(public PassService: PassService,private AddService:AddService){
    this.returnSponsorDetails=null;
  }

  ngOnInit(){ }
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
    //this.PassService.storeSponsorData(this.SponsorDetails);
    this.AddService.addSponsor(this.SponsorDetails).subscribe(returned=>
      {
        this.returnSponsorDetails=returned;
        console.log(returned);
        console.log(this.returnSponsorDetails);
      });
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
