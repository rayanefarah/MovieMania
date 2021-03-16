import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser(name: string, email: string){
    const user: User = {
      name: String(name),
      email: String(email),
    };
    this.userService.addUser(user).subscribe(() => {
      console.log('User Added');
    });
}

}
