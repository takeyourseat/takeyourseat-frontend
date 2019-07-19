import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpTokenInterceptorService implements HttpInterceptor {
  private refreshTokenInProgress = false;

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(public auth: AuthenticationService) {
  }

  /* add access token to all requests, if tey fail with 401 try to refresh the access token
  * source: https://itnext.io/angular-tutorial-implement-refresh-token-with-httpinterceptor-bfa27b966f57*/
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* this interceptor is only interested in requests that failed with code 401 after being given the access token
    * thus we add the access token, handle the request to the next interceptor and only act if there's an error */
    return next.handle(this.addAuthenticationToken(request)).catch(error => {

      /*Check if it is an call to oauth. In essence "get access token with password" or "get access token with refresh token"
      * We're in a catch so if any of these fails there is nothing much to do. We'll just throw the error further */
      if (request.url.includes('oauth/token') && request.method === 'POST' ) {

        /* if this is a "get access token with refresh token" and there has been an error it's better to log out */
          if (request.body.includes('grant_type=refresh_token')) {
            open('/login', '_self');
          }
          return Observable.throw(error);
        }

      /* If it was not a 401 error we are not interested */
      if (error.status !== 401) {
          return Observable.throw(error);
        }

       /*If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
       * which means the new token is ready and we can retry the request again*/
      if (this.refreshTokenInProgress) {
          return this.refreshTokenSubject
            .filter(result => result !== null)
            .take(1)
            .switchMap(() => next.handle(this.addAuthenticationToken(request)));
        } else {
          this.refreshTokenInProgress = true;
          this.refreshTokenSubject.next(null);

          /*We are required to return an Observable,
          * but the operation of retrieving a new access token is itself asynchronous
          * hence this abomination */
          return new Observable<HttpEvent<any>>( observer => {
            this.auth.refreshAccessToken()
              .subscribe((token: any) => {
                  this.refreshTokenInProgress = false;
                  this.refreshTokenSubject.next(token);
                  next.handle(this.addAuthenticationToken(request)).subscribe(
                    (data) => observer.next(data),
                    nextError => observer.error(nextError)
                  );
                },
                (err: any) => {
                this.refreshTokenInProgress = false;
                this.auth.logOut();
                observer.error(err);
                }
              );
            }
          );
        }
      },
    );
  }

  addAuthenticationToken(request: HttpRequest<any>) {
    const accessToken = this.auth.getAccessToken();

    if (!accessToken) {
      return request;
    }

    /* If a request has specified an "Authorization" header do not overwrite it */
    if (request.headers.has('Authorization')) {
      return request;
    }

    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  }
}
