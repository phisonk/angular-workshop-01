import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  show = true;
  firstName = '';
  lastName = '';
  name = '';
  count = '';
  users = []; //Array
  usersChecked = [];
  inputYourName(event : any): void{
    this.firstName = event.target.value;
  }
  inputLastname(input: string):void{
    this.lastName = input;
  }
  checkCount(){
    this.count = `${this.usersChecked.length}/${this.users.length}`;
  }
  onClickuser(input:number):boolean{
    if(this.usersChecked.indexOf(input)==-1){
      this.usersChecked.push(input);
      this.checkCount();
      return true
    }else{
      this.usersChecked.splice(this.usersChecked.indexOf(input),1);
      this.checkCount();
      return false
    }

  }
  onClickSave(): void{
    if(this.firstName != '' && this.firstName.indexOf(' ') == -1){
      this.name = this.firstName + ' ' + this.lastName;
      this.name = `${this.firstName} ${this.lastName}`;

      //Append name to list
      this.users.push(this.name);
      this.checkCount();
    }
    else{
      alert("Please Fill First Name");
    }
  }
  onEnter(): void{
    if(this.firstName != '' && this.firstName.indexOf(' ') == -1){
      this.onClickSave();
    }
    else{
      alert("Please Fill First Name");
    }
  }
  

}
