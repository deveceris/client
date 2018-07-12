import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from './common/http.client';
import {AES} from 'crypto-js';

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
                    <input name="username" type="text" class="form-control" ngModel required placeholder="아이디" tabindex="1"/>
                    <input name="password" type="password" class="form-control" ngModel required placeholder="비밀번호" tabindex="2"/>
                    <br>
                    <button type="submit" class="btn btn-primary" tabindex="3">로그인</button>
                    <button class="btn btn-secondary" (click)="onClickMe()" tabindex="5">회원가입</button>
                </form>
            </div>
        </div>
    `,
})
export class LoginComponent implements OnInit {
    secret = '';

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this.http.get('/api/config').toPromise().then(resp => {
            if (resp.json().data) {
                this.secret = resp.json().data;
            }
        });
    }

    onSubmit(f: NgForm) {
        let authParam = f;
        authParam.value.password = AES.encrypt(f.value.password, this.secret).toString();
        this.http.getAuthorizationToken(JSON.stringify(authParam.value));
    }

    onClickMe() {
        this.router.navigate(['/signup']);
    }
}
