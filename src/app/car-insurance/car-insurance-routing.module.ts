import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance.component';
import { SelectBrandComponent } from './select-brand/select-brand.component';
import { SelectModelComponent } from './select-model/select-model.component';
import { SelectVarientComponent } from './select-varient/select-varient.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [{ path: '', component: CarInsuranceComponent,children:[
  {path: '', component:SelectBrandComponent},
{path:'select-model/:brandName',component:SelectModelComponent},
{path:'select-varient/:modelName',component:SelectVarientComponent},
{path:'registration-details',component:RegistrationDetailsComponent},
{path:'choose-plan',component:ChoosePlanComponent},
{path:'personal-details',component:PersonalDetailsComponent },
{path:'payment-success',component:PaymentSuccessComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInsuranceRoutingModule { }
