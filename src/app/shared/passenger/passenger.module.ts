import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassCountComponent } from './passenger-dashboard/pass-count/pass-count.component';
import { PassCardComponent } from './passenger-dashboard/pass-card/pass-card.component';
import { MaterialModule } from "../material/material.module";






@NgModule({
    declarations : [
    PassengerDashboardComponent,
    PassCountComponent,
    PassCardComponent
  ],
    imports : [
        CommonModule, // ngIf, ngfor use nahi karu sagty but (commonModule) sota deto
        MaterialModule
    ],
    exports : [
        PassengerDashboardComponent,
    ]
})


export class PassengerModule {
    constructor(){
        console.log(`passenger Module is loaded`);
        
    }
 
    
}