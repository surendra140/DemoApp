import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  greeting = "Welcome to GreatLearning"
  
  public name ="";
  
  sayHello(){
    var number = parseInt(this.name);
    var result;

    

    
  }
}
