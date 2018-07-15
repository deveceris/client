import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'projectk-home',

    template: `
        <projectk-menu [menu]="menu"></projectk-menu>
        <br/>
        <router-outlet></router-outlet>
    `,
})
export class HomeComponent implements OnInit {

    menu: string;

    constructor(private route: Router) {
    }

    ngOnInit() {
        this.menu = this.route.url;
    }
}
