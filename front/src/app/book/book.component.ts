import {Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'book',
    styles: ['table { border: 1px solid #dddddd; }',
        'td { height: 40px; }'],
    template: `
        <div style="left: 0; top: 0px;position: absolute;width: 100%; z-index: 10;text-align: center;">
            <ngb-alert *ngIf="successMessage" type="success" (close)="successMessage = null">{{ successMessage }}</ngb-alert>
        </div>
        <div style="position: relative;">
            <div style="right: 0; top: -40px;position: absolute; z-index: 5;">
                <button class="btn btn-outline-primary" (click)="back()">뒤로 가기</button>
            </div>
        </div>
        <div style="width: 800px; margin-top: 40px">
            <h2><strong>{{book?.title}}</strong></h2>
            <a>{{book?.category}}</a>
            <hr/>
        </div>
        <div style="width: 800px;">
            <table>
                <tbody>
                <tr>
                    <td style="width: 30%;"></td>
                    <td style="width: 10%;"></td>
                    <td style="width: 60%;"></td>
                </tr>
                <tr>
                    <td rowspan="6" style="text-align: center;">
                        <img style="width: 200px;" *ngIf="book.thumbnail" src="{{book.thumbnail}}"/>
                        <img style="width: 200px;" *ngIf="!book.thumbnail" src="{{noimg}}"/>
                    </td>
                    <td *ngIf="book.authors?.length > 0; then thenAuthorBlock else elseAuthorBlock"></td>
                    <ng-template #thenAuthorBlock>
                        <td>저자</td>
                        <td><b>{{book?.authors}}</b> 지음</td>
                    </ng-template>
                    <ng-template #elseAuthorBlock>
                        <td></td>
                        <td></td>
                    </ng-template>
                </tr>
                <tr>
                    <td *ngIf="book.publisher; then thenPublisherBlock else elsePublisherBlock"></td>
                    <ng-template #thenPublisherBlock>
                        <td>출판사</td>
                        <td><b>{{book?.publisher}}</b> 펴냄
                            <a style="font-size: 12px;" *ngIf="book.datetime">| {{book.datetime | date: 'yyyy.MM.dd'}}</a>
                        </td>
                    </ng-template>
                    <ng-template #elsePublisherBlock>
                        <td></td>
                        <td></td>
                    </ng-template>
                </tr>
                <tr>
                    <td *ngIf="book.barcode; then thenBarcodeBlock else elseBarcodeBlock"></td>
                    <ng-template #thenBarcodeBlock>
                        <td>바코드</td>
                        <td><b>{{book?.barcode}}</b></td>
                    </ng-template>
                    <ng-template #elseBarcodeBlock>
                        <td></td>
                        <td></td>
                    </ng-template>
                </tr>
                <tr>
                    <td *ngIf="book.status; then thenStatusBlock else elseStatusBlock"></td>
                    <ng-template #thenStatusBlock>
                        <td>상태</td>
                        <ng-template #tipContent>{{book.isbn}}</ng-template>
                        <td>{{book?.status}}<a style="font-size: 12px;" *ngIf="book.isbn" [ngbTooltip]="tipContent"> | <b>ISBN</b></a>
                        </td>
                    </ng-template>
                    <ng-template #elseStatusBlock>
                        <td></td>
                        <td></td>
                    </ng-template>
                </tr>
                <tr>
                    <td *ngIf="book.price == book.sale_price; then thenPriceBlock else elsePriceBlock"></td>
                    <ng-template #thenPriceBlock>
                        <td>가격</td>
                        <td><b>{{book?.price}}원</b></td>
                    </ng-template>
                    <ng-template #elsePriceBlock>
                        <td *ngIf="book?.price">가격</td>
                        <td><s>{{book?.price}}원</s> -> <a style="font-size:30px;"><b>{{book?.sale_price}}원</b></a></td>
                    </ng-template>
                </tr>
                <tr>
                    <td *ngIf="book.translators?.length > 0; then thenTranslatorsBlock else elseTranslatorsBlock"></td>
                    <ng-template #thenTranslatorsBlock>
                        <td>역자</td>
                        <td><a *ngFor="let translator of book.translators"><b>{{translator}}</b></a> 역</td>
                    </ng-template>
                    <ng-template #elseTranslatorsBlock>
                        <td></td>
                        <td></td>
                    </ng-template>
                </tr>
                <tr style="height:150px;">
                    <td colspan="3">{{book?.contents}}</td>
                </tr>
                <tr style="height:100px;">
                    <td colspan="3" style="text-align:center;">
                        <button style="font-weight: bold" class="btn btn-outline-primary" (click)="saveBookmark()"
                                [disabled]="bookmarkDisabled">북마크
                        </button>
                        <a href="{{book?.url}}">
                            <button class="btn btn-outline-primary"><b>Daum책에서 보기</b></button>
                        </a>
                </tr>
            </table>
        </div>

    `
})
export class BookComponent implements OnInit {
    _success = new Subject<string>();
    successMessage: string;

    bookmarkDisabled = false;
    // TODO 데이터 삭제할 것
    book = {
        title: '제목',
        authors: '저자',
        category: '카테고리',
        contents: '생동감 넘치는 다큐멘터리식으로 꾸며진「다큐멘터리 자연관찰 트윙클」 시리즈. 아이들이 자연의 신비함과 소중함을 자연스럽게 깨닫도록 구성했다. 살아 있는 듯한 생생한 사진과 깊이...',
        isbn: '고유번호',
        status: '상태',
        publisher: '출판사',
        price: '가격',
        translators: ['역자'],
        sale_price: '할인가격',
        datetime: '2018-01-01T00:00:00.000+09:00',
        url: 'http://book.daum.net/',
        thumbnail: ''
    };
    noimg = require('../../assets/images/noimg.gif');

    constructor(private http: HttpClient, private router: Router, private location: Location) {
    }

    ngOnInit() {
        this._success.subscribe((message) => this.successMessage = message);
        this._success.pipe(
            debounceTime(2000)
        ).subscribe(() => this.successMessage = null);

        this.getBook().then(result1 => {
            console.log('success to get book');
            this.getBookmark().then(result2 => {
                console.log('success to get bookmark');
            });
        });
    }

    private getBook() {
        let params = this.router.url.split('/book')[1];
        return this.http.get('/api/v1/book/inquiry' + params).toPromise().then(result => {
            let data = result.json().data;
            if (data) {
                this.book = data;
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
            this._success.next('북마크 성공');
            this.bookmarkDisabled = true;
        }).catch(err => {
            console.log(err);
        });
    }

    back() {
        this.location.back();
    }
}
