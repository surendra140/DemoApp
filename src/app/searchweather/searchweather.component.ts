import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchweather',
  templateUrl: './searchweather.component.html',
  styleUrls: ['./searchweather.component.css']
})
export class SearchweatherComponent implements OnInit {

  public city ="";

  getweather(){
    if(this.city == "indore"){
     alert("Weather Of city "+this.city+" is cloudy");
    }
    else if(this.city == "pune"){
      alert("Weather Of city "+this.city+" is Rainy");
    }
    else{
      alert("Weather of city "+this.city+" is clear");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
