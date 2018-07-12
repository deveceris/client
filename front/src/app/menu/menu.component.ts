import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {NgbTabChangeEvent, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

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
                    <a href="/h2"><button class="btn btn-outline-primary">h2 db</button></a>
                    <a href="/swagger-ui.html"><button class="btn btn-outline-primary">swagger</button></a>
                    <button class="btn btn-outline-danger" (click)="logout()">로그아웃</button>
                </div>
            </div>
        </div>
    `,
})

export class MenuComponent implements AfterViewInit {

    @Input() menu: string;
    @ViewChild('ngbTabset') tab: NgbTabset;


    constructor(private router: Router, private http: HttpClient) {
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
}
