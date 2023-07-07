import { Component } from '@angular/core';
import { CarInsuranceService } from '../services/car-insurance.service';
// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent {
  
  constructor(private carInsSvc:CarInsuranceService){
   
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // Load the virtual file system fonts
    // (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    // (pdfMake as any).fonts = {
    //   Roboto: {
    //     normal: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf',
    //     bold: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf',
    //     italics: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc9.ttf',
    //     bolditalics: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc9.ttf'
    //   }
    // };


}
// obj:any={
//     ...this.carInsSvc.carInsuranceModal,
//     ...this.carInsSvc['personal-details']
// }
// generatePDF() {
 
//   const data = this.obj; // Retrieve data from the service

//   const documentDefinition:any = {
//     content: [
//       { text: 'Your PDF Title', style: 'header' },
//       { text: 'Generated on: ' + new Date().toLocaleString(), style: 'subheader' },
//       { text: 'Your Data:', style: 'subheader' },
//       { text: JSON.stringify(data, null, 4), style: 'data' }, // Use JSON.stringify to format the object
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

}
