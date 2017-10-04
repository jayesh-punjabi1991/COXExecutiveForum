"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SponsorDetailComponent = (function () {
    function SponsorDetailComponent() {
    }
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
    };
    return SponsorDetailComponent;
}());
SponsorDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sponsorDetails',
        templateUrl: "sponsorDetailForm.component.html",
        styleUrls: ['../stylesheets/sponsorDetailForm.css'],
    })
], SponsorDetailComponent);
exports.SponsorDetailComponent = SponsorDetailComponent;
//# sourceMappingURL=sponsorDetailForm.component.js.map