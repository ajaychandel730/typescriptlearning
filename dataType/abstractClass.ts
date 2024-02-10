abstract class Ceamra {
 constructor(
 public zoom : string,
 public filter : string   
 )
 {}

 abstract takePhoto():void

 public getFilter():string{
    return this.filter;
 }
}


class phone extends Ceamra{
  
    constructor(){
        super("", "");
    }

    public takePhoto(): void {
        
    }
}



