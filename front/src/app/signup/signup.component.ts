import {Component} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

@Component({
    selector: 'projectk-signup',
    template: `
        <div style="margin-top: 20px">
            <h2><strong>회원가입</strong></h2>
            <hr/>
        </div>
        <div style="margin-top: 30pt">
            <form (ngSubmit)="onSubmit()" #signupForm="ngForm">
                <div class="form-group">
                    <label for="usernameField"><strong>Username</strong></label>
                    <input type="username" class="form-control" id="usernameField" [(ngModel)]="signup.username" required
                           placeholder="username" name="username" #username="ngModel"/>
                </div>
                <div [hidden]="username.valid || username.pristine" class="alert alert-danger">Username은 필수요소입니다.</div>

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
                <button type="submit" class="btn btn-success" [disabled]="!signupForm.form.valid">가입</button>
                <button class="btn btn-cancel" (click)="onClickCancel()">취소</button>
            </form>
        </div>
    `,
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    title = '';
    passwordConfirmationFailed = false;
    passwordConfirmationTxt = '';

    public signup = {
        username: '',
        password: ''
    };

    constructor(private http: HttpClient, private router: Router) {
    }

    confirmPassword() {
        if (this.signup.password === this.passwordConfirmationTxt) {
            this.passwordConfirmationFailed = false;
        } else {
            this.passwordConfirmationFailed = true;
        }
    }

    onClickCancel() {
        this.router.navigate(['/login']);
    }

    onSubmit() {
        console.log('Username: ' + this.signup.username + ', Password: ' + this.signup.password);
        this.http.post(`/api/v1/user`, this.signup).toPromise().then(resp => {
            console.log('response');
            alert('가입완료');
            this.onClickCancel();
        }).catch(err => {
            console.error(err);
        });

        // this.http.put('/carrier/api/config/reload', null).toPromise().then(result => {
        //     this.alertMessage = result.json().data.message;
        //     setTimeout(() => this.alertMessage = null, 3000);
        // });
    }
}
