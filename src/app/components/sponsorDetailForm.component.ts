import { Component, OnInit } from '@angular/core';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';
import {AddService} from '../services/addSponsor.service';
import {PassService} from '../services/passData.service';
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'sponsorDetails',
  templateUrl: `./sponsorDetailForm.component.html`,
  styleUrls: ['../stylesheets/sponsorDetailForm.css'],
  providers: [AddService, PassService]
})
export class SponsorDetailComponent implements OnInit {
  SponsorDetails: SponsorDetails;
  Message: string;
  companyName: string;
  sponsorsName: string;
  emailAdd: string;
  tit: string;
  phoneNo: number;
  coxCont: string;
  companyAdd: string;
  cSZ: string;
  noOfAttend: number;
  invoiceCont: string;
  invoiceContEmail: string;
  invoiceContPhone: string;
  signageCont: string;
  signageContEmail: string;
  signageContPhone: string;
  returnSponsorDetails: string[];
  alltxt: number;
  Spinner: boolean;

  constructor(public PassService: PassService, private AddService: AddService) {
    this.Spinner = false;
    sessionStorage.clear();
    this.returnSponsorDetails = null;
    this.Message = "Please Fill all the Mandatory Fields";
  }

  ngOnInit() { }
  Confirm() {
    var count = 0;
    var count1 = 0;
    $('form input[type=text]').each(function(i: any) {
      if ($(this).val().trim() != '') {
        count += 1;
      }
    });
    $('form input[type=number]').each(function(i: any) {
      if ($(this).val().trim() != '') {
        count += 1;
      }
    });
    $('form input[type=email]').each(function(i: any) {
      if ($(this).val().trim() != '') {
        count += 1;
      }
    });
    if (count != 15) {
      document.getElementById('snackbar').innerHTML = "Please Fill the Mandatory Fields";
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
    }
    else {
      $('form input[type=email]').each(function(i: any) {
        if ($(this).val().includes("@") && $(this).val().includes(".")) {
          count1 += 1;
        }
        else {
          document.getElementById('snackbar').innerHTML = "Please Fill the Email Address Correctly";
          var x = document.getElementById("snackbar")
          x.className = "show";
          setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      })
      if (count1 == 3) {
        if (this.noOfAttend < 0 || this.noOfAttend > 3) {
          document.getElementById('snackbar').innerHTML = "Number of Attendees should be between 0 and 3";
          var x = document.getElementById("snackbar")
          x.className = "show";
          setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
        else {
          count1 += 1;
        }
      }
      if (count1 == 4) {
        if (typeof this.phoneNo != 'number' || typeof this.invoiceContPhone != 'number' || typeof this.noOfAttend != 'number' || typeof this.signageContPhone != 'number') {
          document.getElementById('snackbar').innerHTML = "Please enter numbers in the Number Fields";
          var x = document.getElementById("snackbar")
          x.className = "show";
          setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
        else {
          count1 += 1;
        }
      }
    }
    if (count1 == 5) {
      this.Spinner = true;
      this.SponsorDetails = {
        userDetails:
        {
          name: this.sponsorsName,
          email: this.emailAdd,
          title: this.tit,
          company: this.companyName,
          phoneNumber: this.phoneNo,
          coxContact: this.coxCont,
          noOfAttendees: this.noOfAttend,
          invoiceContact: this.invoiceCont,
          invoiceContactEmail: this.invoiceContEmail,
          invoiceContactPhone: this.invoiceContPhone,
          signageContact: this.signageCont,
          signageContactEmail: this.signageContEmail,
          signageContactPhone: this.signageContPhone,
          address: {
            companyAddress: this.companyAdd,
            cityStateZip: this.cSZ,
          }
        }
      }
      this.AddService.addSponsor(this.SponsorDetails).subscribe(returned => {
        this.returnSponsorDetails = returned;
        if (Object.keys(returned).length == 2) {
          if (returned.errorCode == "23502") {
            this.Spinner = false;
            document.getElementById('snackbar').innerHTML = "Email Address has already been registered";
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
          }
          else if (returned.errorCode == "508") {
            this.Spinner = false;
            document.getElementById('snackbar').innerHTML = "There was an issue in saving details of user. Please try again";
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
          }
          else if (returned.errorCode == "500") {
            this.Spinner = false;
            document.getElementById('snackbar').innerHTML = "Error has occurred. Please contact admin";
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
          }
        }
        else {
          this.PassService.setSponsorDetail(this.returnSponsorDetails);
          setTimeout(function() {
            window.location.href = '../#/forum/acknowledgement';
          }, 5000);
        }
      });
    }
  }
}

interface SponsorDetails {
  userDetails: userDetails;
}
interface userDetails {
  name: string;
  email: string;
  title: string;
  company: string;
  phoneNumber: number;
  coxContact: string;
  noOfAttendees: number;
  invoiceContact: string;
  invoiceContactEmail: string;
  invoiceContactPhone: string;
  signageContact: string;
  signageContactEmail: string;
  signageContactPhone: string;
  address: address;
}
interface address {
  companyAddress: string;
  cityStateZip: string;
}
