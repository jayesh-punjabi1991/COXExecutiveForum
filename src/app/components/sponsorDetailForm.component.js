"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var addSponsor_service_1 = require("../services/addSponsor.service");
var passData_service_1 = require("../services/passData.service");
var SponsorDetailComponent = (function () {
    //returnSponsorDetails:returnSponsorDetails;
    function SponsorDetailComponent(PassService) {
        this.PassService = PassService;
    }
    SponsorDetailComponent.prototype.ngOnInit = function () { };
    SponsorDetailComponent.prototype.Confirm = function () {
        this.SponsorDetails = {
            name: this.sponsorsName,
            email: this.emailAdd,
            title: this.tit,
            company: this.companyName,
            phoneNumber: this.phoneNo,
            coxContact: this.coxCont,
            address: {
                companyAddress: this.companyAdd,
                cityStateZip: this.cSZ,
            }
        };
        console.log(this.SponsorDetails);
        this.PassService.storeSponsorData(this.SponsorDetails);
        // this.AddService.addSponsor(this.SponsorDetails).subscribe(detailsBack => {
        //   console.log(detailsBack);
        // })
    };
    return SponsorDetailComponent;
}());
SponsorDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sponsorDetails',
        templateUrl: "sponsorDetailForm.component.html",
        styleUrls: ['../stylesheets/sponsorDetailForm.css'],
        providers: [addSponsor_service_1.AddService, passData_service_1.PassService]
    }),
    __metadata("design:paramtypes", [passData_service_1.PassService])
], SponsorDetailComponent);
exports.SponsorDetailComponent = SponsorDetailComponent;
// interface returnSponsorDetails{
//   registrationNumber:string;
//   registrationDate:string;
//   user:user;
// }
// interface user{
//   name:string;
//   email:string;
//   title:string;
//   company:string;
//   phoneNumber:number;
//   coxContact:string;
//   address:returnaddress;
//  }
// interface returnaddress{
//   companyAddress:string;
//   cityStateZip:string;
// }
//# sourceMappingURL=sponsorDetailForm.component.js.map