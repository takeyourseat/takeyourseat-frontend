import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  
  intercept(request:HttpRequest<any>, next: HttpHandler) {
    
      let oAuthToken : string = this.basicAuthenticationService.getToken();
      
      if(oAuthToken)
      {
        request = request.clone(
          {
            setHeaders:{
              Authorization:"Bearer "+oAuthToken
            }
          })          
      }
      return next.handle(request);
  } 

  constructor(private basicAuthenticationService: AuthenticationService) { }
}
