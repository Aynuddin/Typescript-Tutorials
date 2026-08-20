"use strict";
function show(val) {
    if (typeof val === "number") {
        console.log(`Val coming as number ${val}`);
    }
    else if (typeof val === "string") {
        console.log(`Val coming as a string ${val}`);
    }
    else {
        console.log(`Val coming as a boolean ${val}`);
    }
}
show(1);
show("Ayn");
show(true);
