export class OPTDEF{

    static gretting(name:string){
        console.log(`Good Morning ${name}`);   
    }

    static grettingOpt(name?:string){
        console.log(`Good Morning ${name}`);  
    }

    static greetingDefault(name: string ="Guest"){
        console.log(`Hello ${name}`);
        
    }
}