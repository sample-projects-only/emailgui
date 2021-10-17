import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // write code here for calling backend service 
  private baseUrl:String ="http://localhost:8080"

  constructor(private http:HttpClient) {
   }
  
    
    sendEmail(data:{ to: string; subject: string; message: string; })
    {
      console.log("base url is ", this.baseUrl);
      return this.http.post(`${this.baseUrl}/sendemail`,data);
    

    }

  }

  
 
