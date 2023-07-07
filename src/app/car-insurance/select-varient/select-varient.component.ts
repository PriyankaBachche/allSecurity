import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';
import { CarInsuranceService } from '../services/car-insurance.service';

@Component({
  selector: 'app-select-varient',
  templateUrl: './select-varient.component.html',
  styleUrls: ['./select-varient.component.scss']
})
export class SelectVarientComponent implements OnInit {
  selectedModel:string|null=null;
  searchTerm=""
  varientList:any;
  insuranceData:any;
  varientTypes:string[]=[];
  selectedVarient:string="";
  constructor(private activateRoute:ActivatedRoute, private http:HttpService, private carInsSvc:CarInsuranceService, private router:Router){
    this.selectedModel=activateRoute.snapshot.paramMap.get('modelName');
    this.insuranceData=this.carInsSvc.carInsuranceModal;
  }
  ngOnInit(): void {
    this.getVarientList();
    console.log("oninit calling")
  }
  getVarientList(){
    
    if(this.selectedModel){
     const endPoint="get-variant?"+"modelName="+this.selectedModel;
    this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
      if(response && response.length>0 && response[0].modelList.length>0){
        const varients:string[]=response[0].modelList.map((el:any)=>el["Fuel Type"])
        this.varientTypes=[...new Set(varients ) ];
        this.selectedVarient=this.varientTypes[0];
        console.log("varientstype",this.varientTypes);
        this.varientList=response[0].modelList;
      }
    },
    error=>{

    })
   } 
   
  }
  setVarientType(type:string){
    this.selectedVarient=type;
  }
  setVarientName(varient:any){
    this.insuranceData.varientName=varient["Variant Name"];
    this.router.navigate(['/car-insurance/registration-details'])

  }

}
