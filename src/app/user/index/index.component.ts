import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  users : User[] = [];
  usersCopy : User[] = [];
  user : User = {
    firstName : "",
    lastName : "",
    age : 0,
    id : 0,

  }
  constructor(public userService:UserService){}

  ngOnInit():void{
    this.userService.getAll().subscribe((data:User[]) => {this.users = data;})
    
  }

  deleteUser(id : number)
  {
    this.userService.delete(id).subscribe(res => {this.users = this.users.filter(item => item.id !== id);})
  }

  getUser(id : number):void{
   this.usersCopy = this.users;
   this.usersCopy = this.usersCopy.filter(item => item.id == id);
   this.user = this.usersCopy[0];
   this.userService.user = this.user;
   
  }
}
