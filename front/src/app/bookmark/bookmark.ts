import {Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

@Component({
    selector: 'bookmark',
    template: `
        <h1>북마크 리스트</h1>
        <ul>
            <li *ngFor="let item of items">
                <a (click)="goTo(item.isbn)">{{ item.title }}</a>
                <button class="btn" (click)="itemRemove(item.id)">삭제</button>
            </li>
        </ul>

    `
})
export class Bookmark implements OnInit {
    items: any[] = [
        {id: '1', title: '개미', isbn: '1234323'},
        {id: '2', title: '알고리즘', isbn: '42343'},
        {id: '3', title: '어떻게 살것 인가', isbn: '12342'}
    ];

    constructor(private http: HttpClient, private router: Router) {

    }

    ngOnInit() {
        // this.init();
    }

    goTo(isbn: string) {
        console.log(isbn);
        this.router.navigate(['/book', isbn]);
    }

    itemRemove(id: string) {
        console.log(id);
    }

    // private getConfigFileNames() {
    //     this.http.get('/api/config/configs').toPromise().then(result => {
    //         this.configFileNames = result.json().data;
    //     });
    // }
    //
    // private reload() {
    //     this.http.put('/api/config/reload', null).toPromise().then(result => {
    //         this.alertMessage = result.json().data.message;
    //         setTimeout(() => this.alertMessage = null, 3000);
    //     });
    // }

}
