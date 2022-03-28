import DynamicModal from "../DynmaicComponent/DynamicModal/DynamicModal";


export class Modal {

    constructor(message, header) {
        this.ErrorHeader = header;
        this.ErrorMessage = message;
        this.func()
    }

    ErrorMessage;
    ErrorHeader;
   
    onClick(){

    }


    func() {
       var modal = <DynamicModal message={this.ErrorMessage} header={this.ErrorHeader}   />  ;
       return modal 
    }
    

}