import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarInsuranceService {
  totalPremium = new BehaviorSubject<Number>(0);
  totalPremiumObs$ = this.totalPremium.asObservable();


  carInsuranceModal:any={
    "brandName":"",
    "modelName":"",
    "varientName":"",
    "year" : '',
    "month" : '',
    "city" : '',
    "selectedPlan":{
      "planName":"",
      "planInfo":{},
      "selectedIdv":0,
      "costCoverage":{
       "netPremium":0,
       "thirdPartyPremium":0,
       "ownDamagePremium":0,
       "addOnsPremium":0,
       "ncbDiscount":0,
      },
     
  },
  "personal-details":{
    "owner-details":{
     "fullName" : "",
     "pinCode" : '',
     "email" : '',
     "mobileNo":''
    },
    "car-details":{
     "regNumber" : '',
     "chasisNumber" : '',
     "engineNumber" : '',
    }
  }
  
}

setPersonalDetails(formData: any) {
  this.carInsuranceModal["owner-details"] = formData;
}
setCarDetails(carData:any){
  this.carInsuranceModal['car-details'] = carData;
}

sendTotalPremium(amount:number){
  this.totalPremium.next(amount);
}

  constructor() { }

}

export class carInsurance{
  brandName!:string;
  modelName!:string;
  varientName!:string;
  year!:string;
  month!:string;
  city!:string;
}
