import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {HttpClient} from './common/http.client';

@Component({
    selector: 'projectk-login',

    template: `
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8" style="text-align: center;">
            <pre style="display:inline-block; text-align:left">
  _____  _____   ____       _ ______ _____ _______   _  __
 |  __ \\|  __ \\ / __ \\     | |  ____/ ____|__   __| | |/ /
 | |__) | |__) | |  | |    | | |__ | |       | |    | ' /
 |  ___/|  _  /| |  | |_   | |  __|| |       | |    |  <
 | |    | | \\ \\| |__| | |__| | |___| |____   | |    | . \\
 |_|    |_|  \\_\\\\____/ \\____/|______\\_____|  |_|    |_|\\_\\
            </pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-6">
                <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate action="/api/login" method="post">
                    <input name="username" type="text" class="form-control" ngModel required placeholder="아이디"/>
                    <input name="password" type="password" class="form-control" ngModel required placeholder="비밀번호"/>
                    <br>
                    <button class="btn btn-secondary" (click)="onClickMe()">회원가입</button>
                    <button type="submit" class="btn btn-primary">로그인</button>
                </form>
            </div>
        </div>
    `,
})
export class Login {

    constructor(private http: HttpClient, private router: Router) {
    }

    onSubmit(f: NgForm) {
        this.http.getAuthorizationToken(JSON.stringify(f.value));
    }
    onClickMe() {
        this.router.navigate(['/signup']);
    }
}
