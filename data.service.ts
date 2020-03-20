import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  	fc()
  	{
  return console.log("sup world!");
}
getusers()
{
	return this.http.get("https://reqres.in/api/users")
   }
}

