import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = "f861d12cbca1c76621e1d94b3c0db4270f64284a";

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + TOKEN
      }
    });

    return next.handle(request);
  }
}
