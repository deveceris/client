import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {NgbTabChangeEvent, NgbTabset} from '@ng-bootstrap/ng-bootstrap';

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
    `,
})

export class Menu implements AfterViewInit {

    @Input() menu: string;
    @ViewChild('ngbTabset') tab: NgbTabset;


    constructor(private router: Router) {
    }

    ngAfterViewInit() {
        this.tab.select(this.menu);
    }

    menuTabChange($event: NgbTabChangeEvent) {
        this.router.navigate([$event.nextId]);
    }
}
