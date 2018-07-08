import {Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

@Component({
    selector: 'book',
    template: `
        <div style="margin-top: 20px; width: 100%;">
            <h2><strong>{{document.title}}</strong></h2>
            <hr/>
        </div>
        <div style="margin-top: 30pt">
            <table style="width:80%;">
                <tbody>
                <tr>
                    <td style="width: 20%;"></td>
                    <td style="width: 80%;"></td>
                </tr>
                </tbody>
                <tr>
                    <th rowspan="3"><img
                            src="{{document.thumbnail}}"/>
                    </th>
                    <th>
                        <strong>{{document.title}}</strong>
                    </th>
                </tr>
                <tr>
                    <td>{{document.authors}} / {{document.publisher}} / {{document.datetime}}</td>
                </tr>
                <tr>
                    <td><p><s>{{document.price}}</s> -> {{document.sale_price}}</p></td>
                </tr>
                <tr>
                    <td colspan="2">{{document.contents}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align:center;"><a
                            href="{{document.url}}">미리보기</a></td>
                </tr>
            </table>
        </div>
    `
})
export class BookComponent implements OnInit {
    // isbn = this.router.url.split('/book')[1];
    isbn = '';
    document = {
        title: '제목',
        authors: '작가',
        contents: '내용',
        isbn: '고유번호',
        publisher: '출판사',
        price: '가격',
        sale_price: '할인 가격',
        datetime: '출판일',
        url: '미리보기',
        thumbnail: '책 이미지'
    }

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.get();
    }

    private get() {
        this.http.get('/api/book/' + this.isbn).toPromise().then(result => {
            this.document = result.json().data;
        });
    }

}
