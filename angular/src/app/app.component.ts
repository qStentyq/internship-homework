import { Component, OnInit } from '@angular/core';
import { userService } from './users.service';
import { User } from './users.service';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
  <div [class.blue-text]="isVisible" [class.black-text]="!isVisible">
    @if(isVisible) {
      <h1>Profiles data: </h1>
      @for (user of users; track user; let i = $index) {
  
      <h2>Name: <span contentEditable="true">{{user.name}}</span>, Email: {{user.email}}, age {{user.age || 'N/A'}}</h2>
      <button (click)="increaseAge(i)">Increase age</button>
      }
    }
    @else {
    <h1>No user data provided</h1>
    }
    <br/><br/>
    <button (click)='toggleVis()'>Toggle visibility</button>
    <div>Number of clicks on buttons during this session {{buttonCounter}}</div>
    <button (click)="resetCount()">Reset counter</button>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  styles: [`
    .blue-text {
      color: blue;
    }
    .black-text {
      color: black;
    }
  `]
})
export class UserProfile implements OnInit {
  users: User[] = [];
  isVisible = true;
  buttonCounter = 0;

  constructor(private userServiceComponent: userService) {}

  ngOnInit() {
    this.userServiceComponent.getUsers().subscribe(
      (data: User[]) => {
        this.users = data.map(user => ({
          ...user,
          age: user.age || Math.floor(Math.random() * 30) + 20 // Adding random age since the API doesn't provide ages
        }));
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  toggleVis() {
    this.isVisible = !this.isVisible;
    this.buttonCounter++;
  }

  increaseAge(index: number) {
    if (!this.users[index].age) {
      this.users[index].age = 18;
    }
    this.users[index].age!++;
    this.buttonCounter++;
  }

  resetCount() {
    this.buttonCounter = 0;
  }
}