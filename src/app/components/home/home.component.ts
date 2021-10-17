import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  // create a function and bind it with button call in html file 
  btnClick(){

    console.log("button click")
    this._snackbar.open("welcome to this snack", "Cancel");
  }

}
