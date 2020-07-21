import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loginForm: FormGroup; 
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      }); 
  }
  show = true;
  name = '';
  count = '';
  users = []; //Array
  usersChecked = [];
  get f() {
    return this.loginForm.controls;
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
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.name = `${this.f.firstName.value} ${this.f.lastName.value}`;
    this.users.push(this.name);
    this.checkCount();
  }
  

}
