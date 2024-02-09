import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   apiURL! : string;

    user : User = {
    firstName : "",
    lastName : "",
    age : 0,
    id : 0,

  }

  constructor(private http: HttpClient) { 
    this.apiURL = encodeURI('http://localhost:5154/api/Etudiant/')
  }

  getAll():Observable<any>{
    return this.http.get(this.apiURL).pipe(catchError((error:HttpErrorResponse) => { return throwError(error);}));
  }

  add(user: User):Observable<any>
  {
    
    return this.http.post(this.apiURL, user);
  }

  update(user:User):Observable<any>{
    
    return this.http.put(`${this.apiURL}${user.id}`, user)
  }

  delete(id:number)
  {
    return this.http.delete(this.apiURL + "" + id);
  }


}
