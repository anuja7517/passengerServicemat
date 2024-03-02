import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/interface';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() passObj ! : Ipassenger;
isEditable : boolean = false;
 @Output() emitpassInfo : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>();
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
    
  }
  onEdit(){
    this.isEditable = true;
  }
  onDone(updatedName : string){
    this.isEditable=false
    this._passengerService.updatePassFullName(this.passObj.id,updatedName)
  }
  OnDelete(){
    this._passengerService.OnDeletePassenger(this.passObj.id)
    this.emitpassInfo.emit(this.passObj)
  }

}
