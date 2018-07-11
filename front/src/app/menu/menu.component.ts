import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {NgbTabChangeEvent, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

@Component({
    selector: 'projectk-menu',

    template: `
        <ngb-tabset type="pills" (tabChange)="menuTabChange($event)" #ngbTabset="ngbTabset">
            <ngb-tab id="/search">
                <ng-template ngbTabTitle><span routerLink="/search"><b>검색</b></span></ng-template>
                <ng-template ngbTabContent></ng-template>
            </ngb-tab>
            <ngb-tab id="/bookmark">
                <ng-template ngbTabTitle><span routerLink="/bookmark"><b>북마크</b></span></ng-template>
                <ng-template ngbTabContent></ng-template>
            </ngb-tab>
        </ngb-tabset>
        <div>
            <button class="btn btn-secondary" (click)="logout()">로그아웃</button>
            <a href="/h2">h2 db</a>
            <a href="/swagger-ui.html">swagger</a>
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

    route(url: string) {
        this.router.navigate([url]);
    }
}
