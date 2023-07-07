import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';
import { SelectBrandComponent } from './select-brand/select-brand.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModelComponent } from './select-model/select-model.component';
import { SelectVarientComponent } from './select-varient/select-varient.component';
import { SharedModule } from "../shared/shared.module";
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
    declarations: [
        CarInsuranceComponent,
        SelectBrandComponent,
        InsuranceDetailsComponent,
        SelectModelComponent,
        SelectVarientComponent,
        RegistrationDetailsComponent,
        ChoosePlanComponent,
        PersonalDetailsComponent,
        PaymentSuccessComponent,
    ],
    imports: [
        CommonModule,
        CarInsuranceRoutingModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        MatSlideToggleModule
        
    ]
})
export class CarInsuranceModule { }
