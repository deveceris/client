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
    //TODO TEST데이터 삭제할 것
    items: any[] = [
        {id: '1', title: '개미', isbn: '8932903492'},
        {id: '2', title: '알고리즘', isbn: '42343'},
        {id: '3', title: '어떻게 살것 인가', isbn: '12342'}
    ];

    constructor(private http: HttpClient, private router: Router) {

    }

    ngOnInit() {
        this.get();
    }

    private get() {
        this.http.get('/api/bookmarks/').toPromise().then(result => {
            if (result.json().length > 0) {
                this.items = result.json();
            }
        }).catch(err => {
            console.log(err);
        });
    }

    goTo(isbn: string) {
        console.log(isbn);
        this.router.navigate(['/book', isbn]);
    }

    itemRemove(id: string) {
        this.http.delete('/api/bookmark/' + id, null).toPromise().then(result => {
            this.get();
        }).catch(err => {
            console.log(err);
        });
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
