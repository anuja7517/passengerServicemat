import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SanckbarService {

  constructor(private _sanckbar : MatSnackBar) { }

  openSanckBar (msg: string){
    this._sanckbar.open(msg, "close",{
      duration: 2500
    })

  }
}


