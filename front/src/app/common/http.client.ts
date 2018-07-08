import {Injectable} from '@angular/core';
import {ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class HttpClient extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router, private modalService: NgbModal) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            if (err.status === 401 || err.status === 403) {
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

    getAuthorizationToken(auth: string) {
        if (process.env.ENV === 'production') {
            this.post('/api/login', auth).toPromise().then(res => {
                // sessionStorage.setItem('AuthorizationToken', res.headers.get('Authorization'));
                console.log(res);
                this.router.navigate(['/search']);
            }).catch(err => {
                console.log(err);
            });
        } else {
            let authorizationToken = 'authorizationToken';
            sessionStorage.setItem('AuthorizationToken', authorizationToken);
            this.router.navigate(['/search']);
        }
    }

    get(url: string, options?: RequestOptionsArgs) {
        return super.get(url, this.addAuthorizationHeader(options));
    }

    post(url: string, data: any, options?: RequestOptionsArgs) {
        return super.post(url, data, this.addAuthorizationHeader(options));
    }

    put(url: string, data: any, options?: RequestOptionsArgs) {
        return super.put(url, data, this.addAuthorizationHeader(options));
    }

    delete(url: string, data: any, options?: RequestOptionsArgs) {
        return super.delete(url, this.addAuthorizationHeader(options));
    }

}
