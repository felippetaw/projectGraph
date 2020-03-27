import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getOptions(): Observable<any>{
    return this.http.get(`http://localhost:3333/graph`)
  }

  getFixedList(): Observable<any> {
    return this.http.get(`http://localhost:3333/all_options`)
  }

  postOption(data) {
    console.log(data)
    return this.http.post(`http://localhost:3333/options`, {
      option:data
    }).subscribe(d => {
      console.log("Sucess!")
    })
  }
  
}
