import {Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

@Component({
    selector: 'bookmark',
    template: `
        <div style="width: 800px;">
            <div class="row">
                <h5 style="margin-left: 20px;">북마크</h5>
            </div>
            <hr/>
            <div class="col-lg-12" style="margin: 20px">
                <ul class="list-group">
                    <li *ngFor="let item of items"
                        class="list-group-item d-flex justify-content-between align-items-center" (mouseleave)="hoverEvent($event)"
                        (mouseenter)="hoverEvent($event)">
                        <a style="cursor: pointer;" (click)="goTo(item)">{{ item.title }} / {{item.publisher}}</a>
                        <button class="btn btn-outline-danger" (click)="itemRemove(item.id)">삭제</button>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class BookmarkComponent implements OnInit {
    // TODO 데이터 삭제할 것
    items: any[] = [
        // {id: '1', title: '개미', isbn: '8932903492'},
        // {id: '2', title: '알고리즘', isbn: '42343'},
        // {id: '3', title: '어떻게 살것 인가', isbn: '12342'}
    ];

    constructor(private http: HttpClient, private router: Router) {

    }

    ngOnInit() {
        this.get();
    }

    private get() {
        this.http.get('/api/v1/bookmarks/').toPromise().then(result => {
            if (result.json().data.length > -1) {
                this.items = result.json().data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    goTo(book: any) {
        console.log(book);
        let params = {
            queryParams: {
                query: book.query,
                page: book.page,
                size: book.size,
                target: book.target,
                sort: book.sort,
                isbn: book.isbn,
                barcode: book.barcode,
                publisher: book.publisher,
                title: book.title,
            }
        };
        this.router.navigate(['/book'], params);
    }

    itemRemove(id: string) {
        this.http.delete('/api/v1/bookmark/' + id, null).toPromise().then(result => {
            this.get();
        }).catch(err => {
            console.log(err);
        });
    }

    hoverEvent(event: any) {
        if (event.type === 'mouseenter') {
            event.target.style.backgroundColor = 'rgb(247, 247, 247)';
        } else {
            event.target.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
}
