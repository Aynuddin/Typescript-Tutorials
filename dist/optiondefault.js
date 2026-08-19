"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPTDEF = void 0;
class OPTDEF {
    static gretting(name) {
        console.log(`Good Morning ${name}`);
    }
    static grettingOpt(name) {
        console.log(`Good Morning ${name}`);
    }
    static greetingDefault(name = "Guest") {
        console.log(`Hello ${name}`);
    }
}
exports.OPTDEF = OPTDEF;
