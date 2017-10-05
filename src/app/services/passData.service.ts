import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/Subject';
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

@Injectable()
export class PassService{
  public SponsorData= new Subject<SponsorDetails>();
    storeSponsorData(SponsorDetails:SponsorDetails){  
    this.SponsorData.next(SponsorDetails);
  }
}
