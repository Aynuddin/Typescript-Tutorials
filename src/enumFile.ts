enum Status{

    sucess="success",
    fail="failed",
    skip="skip"
}

enum  PlaymentStatus{
    PENDING="PENDING",
    SUCCEED="SUCCEED",
    FAILED="FAILED"
}


export class EnumClass{
    static  run(){
        console.log(Status.skip);
    }

    static checkPaymentStatus(){
        console.log(PlaymentStatus.PENDING);
    }  
}
