import { Component } from '@angular/core';
import { CarInsuranceService, carInsurance } from '../services/car-insurance.service';
import { CarInsuranceRoutingModule } from '../car-insurance-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-brand',
  templateUrl: './select-brand.component.html',
  styleUrls: ['./select-brand.component.scss']
})
export class SelectBrandComponent {
  searchTerm=""
  brandList:any=[
    {
      "imgPath":"https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg",
      "brandName":"TATA"
    },
    {
      "imgPath":"https://www.cnet.com/a/img/resize/148e264de9d8cc9b7a97bbe2459402fda2406809/hub/2021/01/06/19ab53c1-6b8d-4f44-a89a-b84fc7f825e8/ogi-kia.jpg?auto=webp&fit=crop&height=675&width=1200",
      "brandName":"KIA"
    },
    {
      "imgPath":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/2560px-Suzuki_logo_2.svg.png",
      "brandName":"SUZUKI"
    },
    {
      "imgPath":"https://www.freepnglogos.com/uploads/audi-logo-2.png",
      "brandName":"AUDI"
    },
  ]
  insuranceData!:carInsurance;
  constructor(private carInsService:CarInsuranceService, private route:Router){
      this.insuranceData=this.carInsService.carInsuranceModal;
  }
  selectBrandName(brand:string){
    this.insuranceData.brandName=brand;
    this.route.navigate(['/car-insurance/select-model',brand])


  }


}
