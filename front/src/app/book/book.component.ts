import {Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

@Component({
    selector: 'book',
    styles: ['table { border: 1px solid #dddddd; }',
        'td { height: 40px; }'],
    template: `
        <div style="width: 800px; margin-top: 20px">
            <h2><strong>{{document?.title}}</strong></h2>
            <hr/>
        </div>
        <div style="width: 800px;">
            <table>
                <tbody>
                <tr>
                    <td style="width: 20%;"></td>
                    <td style="width: 20%;"></td>
                    <td style="width: 60%;"></td>
                </tr>
                <tr>
                    <td rowspan="5" style="text-align: center"><img style="width: 100px;" src="{{document?.thumbnail}}"/></td>
                    <td>저자</td>
                    <td>{{document?.authors}}</td>
                </tr>
                <tr>
                    <td>출판사</td>
                    <td>{{document?.publisher}} / {{document?.datetime}}</td>
                </tr>
                <tr>
                    <td>가격</td>
                    <td><s>{{document?.price}}</s></td>
                </tr>
                <tr>
                    <td>할인 가격</td>
                    <td><h4>{{document?.sale_price}}</h4></td>
                </tr>
                <tr>
                    <td>카테고리</td>
                    <td>{{document?.category}}</td>
                </tr>
                <tr style="height: 100px;">
                    <td colspan="3">{{document?.contents}}</td>
                </tr>
                <tr style="height: 100px;">
                    <td colspan="3" style="text-align:center;">
                        <button class="btn btn-outline-success" (click)="saveBookmark()" [disabled]="bookmarkDisabled">북마크</button>
                        <button class="btn btn-outline-primary"><a href="{{document?.url}}">미리보기</a></button>
                </tr>
            </table>
        </div>
    `
})
export class BookComponent implements OnInit {
    bookmarkDisabled = false;
    // TODO 데이터 삭제할 것
    document = {
        title: '개미',
        authors: '홍길동',
        category: '기술/공학',
        contents: '생동감 넘치는 다큐멘터리식으로 꾸며진「다큐멘터리 자연관찰 트윙클」 시리즈. 아이들이 자연의 신비함과 소중함을 자연스럽게 깨닫도록 구성했다. 살아 있는 듯한 생생한 사진과 깊이...',
        isbn: '고유번호',
        publisher: '열린책들',
        price: '64000',
        sale_price: '57600',
        datetime: '2018-01-01T00:00:00.000+09:00',
        url: 'http://book.daum.net/detail/book.do?bookid=KOR9788932903491',
        thumbnail: 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK00030726472YE%3Fmoddttm=20180417060415'
    };

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.getBook().then(result1 => {
            console.log('success to get book');
            this.getBookmark().then(result2 => {
                console.log('success to get bookmark');
            });
        });
    }

    private getBook() {
        let params = this.router.url.split('/book')[1];
        console.log('test : ' + params);
        return this.http.get('/api/v1/book/inquiry' + params).toPromise().then(result => {
            if (result.json().data) {
                this.document = result.json().data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    private getBookmark() {
        let params = this.router.url.split('/book')[1];
        return this.http.get('/api/v1/bookmark' + params).toPromise().then(result => {
            let bookmark = result.json().data;
            console.log(bookmark);
            if (bookmark) {
                this.bookmarkDisabled = true;
            } else {
                this.bookmarkDisabled = false;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    saveBookmark() {
        let params = this.router.url.split('/book')[1];
        this.http.post('/api/v1/bookmark' + params, null).toPromise().then(result => {
            alert('북마크!');
            this.bookmarkDisabled = true;
        }).catch(err => {
            console.log(err);
        });
    }

}
