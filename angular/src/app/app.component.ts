import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
  <div [class.blue-text]="isVisible" [class.black-text]="!isVisible">
    @if(isVisible) {
      <h1>Profiles data: </h1>
      @for (user of users; track user; let i = $index) {
  
      <h2>Name: <span contentEditable="true">{{user.name}}</span>, Email: {{user.email}}, age {{user.age}}</h2>
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
export class UserProfile {
  users =[{name: 'Vladimir', email: 'Vladimir.Perepelita@endava.com', age: 22},
    {name: 'Alex', email: 'Alex.Joski@endava.com', age: 20},
    {name: 'Cristina', email: 'Cristina.Seventinova@endava.com', age: 21},
  ]
  isVisible = true
  buttonCounter = 0

  toggleVis() {
    this.isVisible = !this.isVisible
    this.buttonCounter++
  }

  increaseAge(index:number) {
    this.users[index].age++
    this.buttonCounter++

  }

  resetCount() {
    this.buttonCounter = 0
  }

}
