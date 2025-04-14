import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export interface User {
    id: number
    name: string,
    email: string,
    age?: number
    city: string
}

@Injectable({
    providedIn: 'root'
})


export class userService {
    url = 'https://jsonplaceholder.typicode.com/users'
    // users =[{id: 1,name: 'Vladimir', email: 'Vladimir.Perepelita@endava.com', age: 22},
    //     {id: 2,name: 'Alex', email: 'Alex.Joski@endava.com', age: 20},
    //     {id: 3, name: 'Cristina', email: 'Cristina.Seventinova@endava.com', age: 21},
    //   ]
    
    
    
    constructor(private http: HttpClient) {}
    getUsers(): Observable<any> {
        return this.http.get(this.url, {headers: {Accept: 'application/json'}})
    }
    // getUser(id: number) {
    //     return this.users.find(user => user.id === id);
    // }
}