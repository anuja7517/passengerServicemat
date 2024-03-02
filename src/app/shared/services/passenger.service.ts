import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/interface';
import { SanckbarService } from './sanckbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengerArray:Array<Ipassenger>=[
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
},
];

  constructor( private _snackBarService : SanckbarService) { }

  fetchPassengerData(){
    //API call to get pass date 
    return this.passengerArray;
  }
  updatePassFullName(id: number,updatedfullname: string){
//API call function // API call passenger name dadabase update 
    for (let i = 0; i < this.passengerArray.length; i++) {
      if(this.passengerArray[i].id === id){
        let getNmae = this.passengerArray[i].fullname;
        this.passengerArray[i].fullname=updatedfullname;
        this._snackBarService.openSanckBar(`The Passenger ${getNmae} is changeed to ${updatedfullname}`)
        break;
      }
      
    }
  }
  OnDeletePassenger(id: number){
    let getindex = this.passengerArray.findIndex(pass => pass.id === id);
    console.log(this.passengerArray[getindex].fullname);
    let getNmae =this.passengerArray[getindex].fullname
    this.passengerArray.splice(getindex,1)
    this._snackBarService.openSanckBar(`the Passenger ${this.passengerArray[getindex].fullname}is remove!!!`)
  }
  
}
