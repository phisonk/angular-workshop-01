import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { User } from 'src/app/models/user';

type Users = User[];
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
  //users = []; //Array
  users:Users = [];
  usersChecked = [];
  get f() {
    return this.loginForm.controls;
   } 
  checkCount(){
    this.count = `${this.users.filter((u) => u.status).length}/${this.users.length}`;
  }
  onClickuser(index:number):void{
    this.users[index].status = !this.users[index].status;
    this.checkCount();
    return;
    // if(this.usersChecked.indexOf(input)==-1){
    //   this.usersChecked.push(input);
    //   this.checkCount();
    //   return true
    // }else{
    //   this.usersChecked.splice(this.usersChecked.indexOf(input),1);
    //   this.checkCount();
    //   return false
    // }

  }
  onClickSave(): void{
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.name = `${this.f.firstName.value} ${this.f.lastName.value}`;
    const user = new User(this.name,false);
    //this.users.push(this.name);
    this.users.push(user);
    this.checkCount();
  }
  

}
