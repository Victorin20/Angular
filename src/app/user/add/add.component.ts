import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  
  user : User = {
    firstName : "",
    lastName : "",
    age : 0,
    id : 0,

  }
  constructor(public userService:UserService){}
  onSubmit():void
  {
    this.userService.add(this.user).subscribe(response => {
      console.log("Element added succesfully:", response);
    });
    alert("L'etudiant a ete rajoute avec succes!")
  }
}
