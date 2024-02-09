import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from '../index/index.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink, IndexComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  
  users : User[] = [];
  usersCopy : User[] = [];
  
  constructor(public userService:UserService){}
  
  addUser : User = this.userService.user;
  ngOnInit():void{
    this.userService.getAll().subscribe((data:User[]) => {this.users = data;})
  }


  onSubmit()
  {
    console.log(this.addUser)
    this.userService.update(this.addUser).subscribe(
      response => {
        console.log('Data added successfully:', response);
        // Handle success
      },
      error => {
        console.error('Error adding data:', error);
        // Handle error
      }
    );
  
    alert("Les informations ont ete mise a jour!")
  }
}
