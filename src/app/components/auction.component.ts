import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'auction',
  templateUrl: `./auction.component.html`,
  styleUrls:['../stylesheets/auction.css'],
})
export class AuctionComponent  {
  displayFile(){
    window.open('app/images/2018DraftDonationLetter.pdf');
  }
}
