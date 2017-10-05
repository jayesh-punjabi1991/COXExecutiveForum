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
var passData_service_1 = require("../services/passData.service");
var InvoiceComponent = (function () {
    function InvoiceComponent(PassService) {
        this.PassService = PassService;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        this.PassService.SponsorData.subscribe(function (SponsorDetails) { return console.log("Here"); });
    };
    InvoiceComponent.prototype.Print = function () {
        window.print();
    };
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'invoice',
        templateUrl: "invoice.component.html",
        styleUrls: ['../stylesheets/invoice.css', '../stylesheets/printInvoice.css'],
        providers: [passData_service_1.PassService]
    }),
    __metadata("design:paramtypes", [passData_service_1.PassService])
], InvoiceComponent);
exports.InvoiceComponent = InvoiceComponent;
//# sourceMappingURL=invoice.component.js.map