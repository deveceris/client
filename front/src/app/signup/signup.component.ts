import {Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';
import {AES} from 'crypto-js';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'projectk-signup',
    template: `
        <div style="left: 0; top: 0px;position: absolute;width: 100%; z-index: 10;text-align: center;">
            <ngb-alert *ngIf="successMessage" type="success" (close)="successMessage = null">{{ successMessage }}</ngb-alert>
        </div>
        <div style="margin-top: 20px">
            <h2><strong>회원가입</strong></h2>
            <hr/>
        </div>
        <div style="margin-top: 30pt">
            <form (ngSubmit)="onSubmit()" #signupForm="ngForm">
                <div class="form-group">
                    <label for="usernameField"><strong>Username</strong></label>
                    <input type="username" class="form-control" id="usernameField" [(ngModel)]="signup.username" required
                           placeholder="username" name="username" #username="ngModel"
                           (blur)="confirmUsername(username.valid, username.pristine, signup.username)"/>
                </div>
                <div [hidden]="username.valid || username.pristine" class="alert alert-danger">Username은 필수요소입니다.</div>
                <div [hidden]="!usernameDuplicated" class="alert alert-danger">이미 존재하는 Username입니다.</div>

                <div class="form-group">
                    <label for="password"><strong>Password</strong></label>
                    <input type="password" class="form-control" id="password" [(ngModel)]="signup.password" name="password"
                           (blur)="confirmPassword()" required placeholder="Password" #pswd="ngModel"/>
                </div>
                <div [hidden]="pswd.valid || pswd.pristine" class="alert alert-danger">Password는 필수요소입니다.</div>
                <div class="form-group">
                    <label for="cnfpassword"><strong>Confirm Password</strong></label>
                    <input type="password" class="form-control" id="cnfpassword" [(ngModel)]="passwordConfirmationTxt"
                           (blur)="confirmPassword()" name="passwordConfirmationTxt"/>
                </div>
                <div [hidden]="!passwordConfirmationFailed" class="alert alert-danger">Password가 맞지않습니다.</div>
                <button type="submit" class="btn btn-success"
                        [disabled]="!signupForm.form.valid || passwordConfirmationFailed || usernameDuplicated">가입
                </button>
                <button class="btn btn-cancel" (click)="onClickCancel()">취소</button>
            </form>
        </div>
    `,
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    _success = new Subject<string>();
    successMessage: string;

    passwordConfirmationFailed = false;
    usernameDuplicated = false;
    passwordConfirmationTxt = '';
    secret = '';
    public signup = {
        username: '',
        password: ''
    };

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this._success.subscribe((message) => this.successMessage = message);
        this._success.pipe(
            debounceTime(2000)
        ).subscribe(() => this.successMessage = null);

        this.http.get('/api/config').toPromise().then(resp => {
            if (resp.json().data) {
                this.secret = resp.json().data;
            }
        });
    }

    confirmPassword() {
        if (this.signup.password === this.passwordConfirmationTxt) {
            this.passwordConfirmationFailed = false;
        } else {
            this.passwordConfirmationFailed = true;
        }
    }

    confirmUsername(valid: boolean, pristine: boolean, username: string) {
        if (valid && !pristine) {
            this.http.get(`/api/v1/user/username/` + username).toPromise().then(resp => {
                if (resp.json().data) {
                    this.usernameDuplicated = true;
                } else {
                    this.usernameDuplicated = false;
                }
            }).catch(err => {
                console.log('failed to duplicate check : ' + err);
                this.usernameDuplicated = false;
            });
        }
    }

    onClickCancel() {
        this.router.navigate(['/login']);
    }

    onSubmit() {
        let encrypted = AES.encrypt(this.signup.password, this.secret).toString();
        this.signup.password = encrypted;
        this.http.post(`/api/v1/user`, this.signup).toPromise().then(resp => {
            console.log('response');
            this._success.next('가입 완료');
            this.onClickCancel();
        }).catch(err => {
            console.error(err);
            this._success.next('정상적인 요청이 아닙니다. : ' + err);
        });
    }
}
