"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumClass = void 0;
var Status;
(function (Status) {
    Status["sucess"] = "success";
    Status["fail"] = "failed";
    Status["skip"] = "skip";
})(Status || (Status = {}));
var PlaymentStatus;
(function (PlaymentStatus) {
    PlaymentStatus["PENDING"] = "PENDING";
    PlaymentStatus["SUCCEED"] = "SUCCEED";
    PlaymentStatus["FAILED"] = "FAILED";
})(PlaymentStatus || (PlaymentStatus = {}));
class EnumClass {
    static run() {
        console.log(Status.skip);
    }
    static checkPaymentStatus() {
        console.log(PlaymentStatus.PENDING);
    }
}
exports.EnumClass = EnumClass;
