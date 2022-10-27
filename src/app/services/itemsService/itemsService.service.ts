import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

constructor(private httpClient: HttpClient) { }

get(callback:Function){
  this.httpClient.get(`https://jsonplaceholder.typicode.com/photos`).subscribe((response:any)=>{
    callback(response);
  })
}
}
