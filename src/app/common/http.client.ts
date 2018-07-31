import {Injectable} from '@angular/core';
import {ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpClient extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            if (err.status === 401 || err.status === 403 || err.status === 302 || err.status === 404) {
                this.router.navigate(['/login']);
            } else if (err.status === 502) {
                this.router.navigate(['/login']);
            }
            return Observable.throw(err);
        });
    }

    private addAuthorizationHeader(options?: RequestOptionsArgs): RequestOptionsArgs {
        let authOptions: RequestOptionsArgs = options !== undefined ? options : {};

        if (authOptions.headers === undefined) {
            let headers = new Headers();
            authOptions.headers = headers;
        }
        authOptions.headers.set('Authorization', sessionStorage.getItem('AuthorizationToken'));
        return authOptions;
    }

    removeAuthorizationToken() {
        sessionStorage.removeItem('AuthorizationToken');
    }

    getAuthorizationToken(auth: string, _success: any) {
        if (process.env.ENV === 'production') {
            console.log('auth : ' + auth);
            this.post('/login', auth).toPromise().then(res => {
                sessionStorage.setItem('AuthorizationToken', res.headers.get('Authorization'));
                console.log(res);
                this.router.navigate(['/search']);
            }).catch(err => {
                console.log(err);
                _success.next('로그인 실패 :' + err.status);
            });
        } else {
            let authorizationToken = 'authorizationToken';
            sessionStorage.setItem('AuthorizationToken', authorizationToken);
            this.router.navigate(['/search']);
        }
    }

    get(url: string, options?: RequestOptionsArgs) {
        if (process.env.ENV === 'production') {
            url = '/api/v1' + url;
        }
        return super.get(url, this.addAuthorizationHeader(options));
    }

    post(url: string, data: any, options?: RequestOptionsArgs) {
        if (process.env.ENV === 'production') {
            url = '/api/v1' + url;
        }
        return super.post(url, data, this.addAuthorizationHeader(options));
    }

    put(url: string, data: any, options?: RequestOptionsArgs) {
        if (process.env.ENV === 'production') {
            url = '/api/v1' + url;
        }
        return super.put(url, data, this.addAuthorizationHeader(options));
    }

    delete(url: string, data: any, options?: RequestOptionsArgs) {
        if (process.env.ENV === 'production') {
            url = '/api/v1' + url;
        }
        return super.delete(url, this.addAuthorizationHeader(options));
    }

}
