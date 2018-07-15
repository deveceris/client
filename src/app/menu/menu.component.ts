import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {NgbModal, NgbTabChangeEvent, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';
import {PopupComponent} from '../common/popup.component';

@Component({
    selector: 'projectk-menu',

    template: `
        <div>
            <ngb-tabset type="pills" (tabChange)="menuTabChange($event)" #ngbTabset="ngbTabset">
                <ngb-tab id="/search">
                    <ng-template ngbTabTitle><span><b>검색</b></span></ng-template>
                </ngb-tab>
                <ngb-tab id="/bookmark">
                    <ng-template ngbTabTitle><span routerLink="/bookmark"><b>북마크</b></span></ng-template>
                </ngb-tab>
            </ngb-tabset>
            <div style="position: relative;">
                <div style="right: 0; top: -40px;position: absolute;">
                    <a (click)="goToH2()">
                        <button class="btn btn-outline-primary">H2 Database Client</button>
                    </a>
                    <a href="/swagger-ui.html">
                        <button class="btn btn-outline-primary">swagger</button>
                    </a>
                    <button class="btn btn-outline-danger" (click)="logout()">로그아웃</button>
                </div>
            </div>
        </div>
    `,
})

export class MenuComponent implements AfterViewInit {

    @Input() menu: string;
    @ViewChild('ngbTabset') tab: NgbTabset;


    constructor(private router: Router, private http: HttpClient, private modalService: NgbModal) {
    }

    ngAfterViewInit() {
        this.tab.select(this.menu);
    }

    menuTabChange($event: NgbTabChangeEvent) {
        this.router.navigate([$event.nextId]);
    }

    logout() {
        this.http.removeAuthorizationToken();
        this.router.navigate(['/login']);
    }

    goToH2() {
        const popup = this.modalService.open(PopupComponent);

        popup.componentInstance.params = {
            useOk: false,
            useCancel: false,
            title: () => {
                return 'H2 Database Client';
            },
            content: () => {
                let h2image = require('../../assets/images/h2.jpg');
                return `<img style="width: 200px;" src=` + h2image + `/>
                        <a>위 화면과 같이 Database 접속 정보를 입력 합니다.</a><br>
                        <a>JDBC URL: <b>jdbc:h2:~/testdb</b></a><br>
                        <a>User Name: <b>sa</b></a><br>
                        <a>Password: <b>sa</b></a><br>
                        <h5><a href="/h2">여기를 눌러 H2 Database Client로 이동하세요.</a></h5>`;
            },
            cancelCallback: () => {
                popup.dismiss();
            }
        };

    }
}
