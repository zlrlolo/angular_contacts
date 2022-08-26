import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GolbalInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // Clone the request and set the new header in one step.
    const token = window.localStorage.getItem('auth_token')
    const authReq = req.clone({
      headers: req.headers.set('X-Access-Token', token||'')
    });
    return next.handle(authReq);
  }
}


