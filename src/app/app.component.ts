import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phisonk';
  score = 100;
  show = true;
  firstName = '';
  lastName = '';
  name = '';
  colors = ['Red','Green','Blue']; //Array
  inputYourName(event : any): void{
    this.firstName = event.target.value;
  }
  inputLastname(input: string):void{
    this.lastName = input;
  }
  onClickSave(){
    this.name = this.firstName + ' ' + this.lastName;
  }
  onEnter(){
    if(this.firstName != '' && this.lastName != ''){
      this.onClickSave();
    }
    else{
      alert("Please Fill All Input Box");
    }
  }
  
}
