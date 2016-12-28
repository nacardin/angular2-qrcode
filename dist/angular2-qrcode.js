var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, ElementRef } from '@angular/core';
import * as qrcode from "qrcode-generator";
export var QRCodeComponent = (function () {
    function QRCodeComponent(elementRef) {
        this.elementRef = elementRef;
        this.data = '';
        this.size = 128;
        this.type = 4;
        this.level = 'M';
        this.fgColor = '#000000';
        this.bgColor = '#FFFFFF';
    }
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if ('data' in changes) {
            this.generate();
        }
    };
    QRCodeComponent.prototype.generate = function () {
        try {
            var qr = qrcode({
                typeNumber: this.type,
                errorCorrectionLevel: this.level,
                fgColor: parseInt(this.fgColor.substr(1), 16),
                bgColor: parseInt(this.bgColor.substr(1), 16)
            });
            qr.addData(this.data);
            qr.make();
            var imgTagString = qr.createImgTag(this.type, 0);
            var el = this.elementRef.nativeElement;
            el.innerHTML = imgTagString;
            var imgTagObject = el.firstElementChild;
            imgTagObject.width = this.size;
            imgTagObject.height = this.size;
        }
        catch (e) {
            console.error("Could not generate QR Code: " + e.message);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], QRCodeComponent.prototype, "data", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], QRCodeComponent.prototype, "size", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], QRCodeComponent.prototype, "type", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], QRCodeComponent.prototype, "level", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], QRCodeComponent.prototype, "fgColor", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], QRCodeComponent.prototype, "bgColor", void 0);
    QRCodeComponent = __decorate([
        Component({
            moduleId: 'module.id',
            selector: 'qr-code',
            template: ''
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], QRCodeComponent);
    return QRCodeComponent;
}());
export var QRCodeModule = (function () {
    function QRCodeModule() {
    }
    QRCodeModule = __decorate([
        NgModule({
            exports: [QRCodeComponent],
            declarations: [QRCodeComponent],
            entryComponents: [QRCodeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], QRCodeModule);
    return QRCodeModule;
}());
//# sourceMappingURL=angular2-qrcode.js.map