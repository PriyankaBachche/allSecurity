import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';
import { CarInsuranceService } from '../services/car-insurance.service';

@Component({
  selector: 'app-select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.scss']
})
export class SelectModelComponent implements OnInit {
  searchTerm="";
  selectedBrand:string|null=null;
  modelList:any[]=[];
  insuranceData:any;
  constructor(private route:ActivatedRoute, private http:HttpService, private carInsSvc:CarInsuranceService, private router:Router){
    this.selectedBrand=this.route.snapshot.paramMap.get('brandName');
    this.insuranceData=this.carInsSvc.carInsuranceModal;
  }
  ngOnInit(): void {
    this.getModelList()
  }
  getModelList(){
    const endPoint='brands?'+'brandName='+this.selectedBrand;
    this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
       if(response && response.length>0){
         console.log("model-list",response[0].models);
         this.modelList=response[0].models;
      }
    },
    error=>{

    })
  }
  selectModel(model:string){
    this.insuranceData.modelName=model;
    this.router.navigate(['/car-insurance/select-varient',model]);
    console.log(model)
  }

}
