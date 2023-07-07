import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarInsuranceService } from '../services/car-insurance.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  personalDetails!:FormGroup;
  insuranceData:any;
  ownershipDetailsCompleted:boolean=false;
  isSubmit:boolean=true;

  constructor(private carInsSvc:CarInsuranceService,private fb:FormBuilder){
    this.insuranceData = this.carInsSvc.carInsuranceModal;
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    (pdfMake as any).fonts = {
      Roboto: {
        normal: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf',
        bold: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf',
        italics: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc9.ttf',
        bolditalics: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc9.ttf'
      }
    };

  }
  ngOnInit(): void {
   this.createForm();
  }

  createForm(){
    this.personalDetails = this.fb.group({
      "owner-details":this.fb.group({
          "fullName":['',[Validators.required]],
          "pincode":['',[Validators.required]],
          "emailAddress":['',[Validators.required]],
          "mobileNumber":['',[Validators.required]],
          "sendUpdatesViaWhatsApp":[false],
          "address":['',[]],
          "nomineeName":['',[Validators.required]],
          "nomineeRelationShip":['']
      }),
      "car-details":this.fb.group({
        "regNumber":['',[Validators.required]],
        "chasisNumber":['',[Validators.required]],
        "engineNumber":['',[]],
        "isCarLoanTaken":[false],
        "bankLoanProvider":['']
      })
    })
  }
  get fullName(){
    return this.personalDetails.get('owner-details.fullName');
  };

  get pinCode(){
    return this.personalDetails.get('owner-details.pincode')
  }
  get email(){
    return this.personalDetails.get('owner-details.emailAddress')
  }
  get phone(){
    return this.personalDetails.get('owner-details.mobileNumber')
  }

  get chasisNumber(){
    return this.personalDetails.get('car-details.chasisNumber')
  }
  get regNumber(){
    return this.personalDetails.get('car-details.regNumber')
  }
  submitForm() {
     console.log("formdata",this.personalDetails.value);
    // this.carInsSvc['personal-details']=this.personalDetails.value;
    // console.log(this.carInsSvc['personal-details'])
    // this.isSubmit=false;
    const formData = {
      "owner-details": {
        "fullName": this.personalDetails.value["owner-details"]["fullName"],
        "pinCode": this.personalDetails.value["owner-details"]["pincode"],
        "email": this.personalDetails.value["owner-details"]["emailAddress"],
        "mobileNo": this.personalDetails.value["owner-details"]["mobileNumber"],
        
      }
    }
    this.carInsSvc.setPersonalDetails(formData);
    
    const carDetails = {
      "car-details" : {
        "regNumber" : this.personalDetails.value['car-details']['regNumber'],
        "chasisNumber" : this.personalDetails.value['car-details']['chasisNumber'],
        "engineNumber" : this.personalDetails.value['car-details']['engineNumber']
      }
    }
    
    this.carInsSvc.setCarDetails(carDetails);
      }
    
  
  

// generatePDF() {

//   let obj:any={
//     ...this.carInsSvc.carInsuranceModal,
//     ...this.carInsSvc['personal-details']
//   }
 
//   const data = obj; // Retrieve data from the service
 

//   const documentDefinition:any = {
//     content: [
//       { text: 'AllSecurity Car Insurance Details', style: 'header' },
//       { text: 'insurance Details:', style: 'subheader' },
//       { text: JSON.stringify(data, null, 4), style: 'text' }, // Use JSON.stringify to format the object
//       { text: 'Generated on: ' + new Date().toLocaleString(), style: 'subheader' },
//     ],
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//         margin: [0, 0, 0, 20], // Adjust the margin as per your needs
//       },
//       subheader: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 15, 0, 5],
//       },
//       data: {
//         fontSize: 12,
//         // font: 'Courier', // Optional: Specify a font for monospaced text
//       },
//     },
//   } 

//   const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
//   pdfDocGenerator.open();

// }
generatePDF() {
  const documentDefinition: any = {
    content: [
      { text: 'Car Insurance Receipt', style: 'header', margin: [0, 0, 30, 0] },

      { text: 'Registration Details:', style: 'subheader', margin: [0, 10] },
      { text: `Brand Name: ${this.insuranceData.brandName}`, style: 'label', margin: [0, 5] },
      { text: `Model Name: ${this.insuranceData.modelName}`, style: 'label', margin: [0, 5] },
      { text: `Variant Name: ${this.insuranceData.varientName}`, style: 'label', margin: [0, 5] },
      { text: `Year: ${this.insuranceData.year}`, style: 'label', margin: [0, 5] },
      { text: `Month: ${this.insuranceData.month}`, style: 'label', margin: [0, 5] },
      { text: `City: ${this.insuranceData.city}`, style: 'label', margin: [0, 5] },

      { text: 'Selected Plan Details:', style: 'subheader', margin: [0, 10] },
      { text: `Plan Name: ${this.insuranceData.selectedPlan.planName}`, style: 'label' },

      { text: 'Personal Details', style: 'header', margin: [0, 10] },
      { text: 'Owner Details:', style: 'subheader', margin: [0, 5] },

      { text: `Full Name: ${this.insuranceData['personal-details']['owner-details']['fullName']}`, style: 'label', margin: [0, 5] },
      { text: `Pin Code: ${this.insuranceData['personal-details']['owner-details']['pinCode']}`, style: 'label', margin: [0, 5] },
      { text: `Email Address: ${this.insuranceData['personal-details']['owner-details']['email']}`, style: 'label', margin: [0, 5] },
      { text: `Mobile Number: ${this.insuranceData['personal-details']['owner-details']['mobileNo']}`, style: 'label', margin: [0, 5] },


      { text: 'Car Details:', style: 'subheader', margin: [0, 10] },
      {text : `Registration Number : ${this.insuranceData['personal-details']['car-details']['regNumber']}`, style: 'label', margin: [0, 5]},
      {text : `Chasis Number : ${this.insuranceData['personal-details']['car-details']['chasisNumber']}`, style: 'label', margin: [0, 5]},
      {text : `Engine Number : ${this.insuranceData['personal-details']['car-details']['engineNumber']}`, style: 'label', margin: [0, 5]}
    ],
    styles: {
      header: {
        fontSize: 20,
        bold: true,
        color: '#002D62',
        alignment: 'center',
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 5]
      },
      label: {
        bold: true,
        color: 'grey'
      },

    }
  };

  pdfMake.createPdf(documentDefinition).open(); // Opens the PDF in a new tab
}







}
