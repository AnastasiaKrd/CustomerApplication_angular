import { Component, Injector } from '@angular/core'
import { Customer } from "./CustomerApp.model"
import { BaseLogger } from "../Utility/CustomerApp.Logger"

@Component({
    templateUrl: './CustomerApp.CustomerView.html',
})

export class CustomerComponent {
    title = 'CustomerApplication';
    CustomerModel : Customer = new Customer();
    CustomerModels : Array<Customer> = new Array<Customer>();
    LogObj: BaseLogger = null;
    constructor(_injector : Injector){
        this.LogObj = _injector.get<BaseLogger>(<any>"1");
        this.LogObj.Log();
    }

    

    SelectCustomer(_selected:any){
        this.CustomerModel = _selected;
    }

    Add(){
        this.CustomerModels.push(this.CustomerModel);
        this.CustomerModel = new Customer(); //clear UI
    }
    hasError(typeOfValidator: string, controlName: string) : boolean{
        return this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeOfValidator);
    }
}