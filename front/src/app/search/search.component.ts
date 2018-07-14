import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'projectk-search',
    template: `
        <div style="width: 800px;">
            <div class="row">
                <h5 style="margin-left: 20px;">책 검색</h5>
            </div>
            <hr/>
            <div class="row">
                <div class="col" style="display: flex;">
                    <div ngbDropdown class="d-inline-block">
                        <button class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle tabindex="1">{{targetName}}</button>
                        <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
                            <button (click)="selectTarget($event)" class="dropdown-item" value="all">전체</button>
                            <button (click)="selectTarget($event)" class="dropdown-item" value="title">책제목</button>
                            <button (click)="selectTarget($event)" class="dropdown-item" value="publisher">출판사</button>
                            <button (click)="selectTarget($event)" class="dropdown-item" value="isbn">ISBN</button>
                        </div>
                    </div>
                    <div ngbDropdown class="d-inline-block">
                        <button class="btn btn-outline-primary" id="dropdownBasic2" ngbDropdownToggle tabindex="1">{{sortName}}</button>
                        <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
                            <button (click)="selectSort($event)" class="dropdown-item" value="sales">판매량순</button>
                            <button (click)="selectSort($event)" class="dropdown-item" value="accuracy">정확도순</button>
                            <button (click)="selectSort($event)" class="dropdown-item" value="recency">최신순</button>
                        </div>
                    </div>
                    <ng-template #popContent>
                        <div *ngFor="let item of histories">
                            <button class="btn btn-link p-0" type="button" style="cursor: pointer"
                                    (click)="selectHistory(item.keyword)">
                                {{ item.keyword }}
                            </button>
                            <br>
                        </div>

                    </ng-template>
                    <input type="text" class="form-control" [(ngModel)]="query" placeholder="검색어를 입력하세요."
                           [ngbPopover]="popContent" placement="bottom" popoverTitle="최근 검색어" #p="ngbPopover" (document:click)="p.close()"
                           (click)="$event.stopPropagation()" tabindex="2" (keydown)="onKeydown($event)"/>
                    <!--<input type="username" class="form-control" id="usernameField" [(ngModel)]="signup.username" required-->
                    <!--placeholder="username" name="username" #username="ngModel"/>-->
                    <button class="btn btn-outline-primary" (click)="clickSearch()" tabindex="3">검색</button>
                </div>
            </div>
            <div class="col-lg-12" style="margin: 20px">
                <ul class="list-group">
                    <li *ngFor="let book of data.documents"
                        class="list-group-item d-flex justify-content-between align-items-center" (click)="inquiryBook(book)"
                        (mouseleave)="hoverEvent($event)" (mouseenter)="hoverEvent($event)">
                        <table>
                            <tbody>
                            <tr>
                                <td style="width: 20%;"></td>
                                <td style="width: 30%;"></td>
                                <td style="width: 50%;"></td>
                            </tr>
                            <tr>
                                <td rowspan="3">
                                    <img style="width: 100px;" src="{{book?.thumbnail}}"/>
                                </td>
                                <td>
                                    <b>{{book?.title}}</b>
                                </td>
                                <td rowspan="3">{{book?.contents}}</td>
                            </tr>
                            <tr>
                                <td *ngIf="book.authors">
                                    {{book?.authors}} 지음
                                </td>
                            </tr>
                            <tr>
                                <td *ngIf="book.publisher">
                                    {{book?.publisher}} 펴냄
                                </td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
            <ngb-pagination class="d-flex justify-content-center" [maxSize]="5" [collectionSize]="total"
                            [(page)]="page" (pageChange)="pageChange($event)"></ngb-pagination>
        </div>
    `,
})
export class SearchComponent implements OnInit, AfterViewInit {
    targetNameMap = {
        'all': '전체',
        'title': '책제목',
        'publisher': '출판사',
        'isbn': 'ISBN'
    };
    sortNameMap = {
        'sales': '판매량순',
        'accuracy': '정확도순',
        'recency': '최신순'
    };

    page = this.activatedRoute.snapshot.queryParams.page || 1;   // 페이지(max: 50)
    size = 10; // 페이지당 보여줄 원소 수(max: 50)
    total = 10; // 검색어에 검색된 문서수
    query = '';
    sort = 'sales';
    sortName = this.sortNameMap[this.sort];
    target = 'all';
    targetName = this.targetNameMap[this.target];
    data: any = {};
    histories: any = {};

    constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {

    }

    ngOnInit(): void {
        this.getHistory();
    }


    ngAfterViewInit(): void {
        console.log(this.router.url.split('/search')[1]);
        if (this.router.url.split('/search')[1]) {
            let routedQueryParams = this.activatedRoute.snapshot.queryParams;
            this.query = routedQueryParams.query;
            this.page = routedQueryParams.page;
            this.size = routedQueryParams.size;
            this.target = routedQueryParams.target;
            this.targetName = this.targetNameMap[this.target];
            this.sort = routedQueryParams.sort;
            this.sortName = this.sortNameMap[this.sort];
            this.total = this.page * this.size;
        }
    }

    doSearch() {
        let path = 'search?query=' + this.query + '&page=' + this.page + '&size='
            + this.size + '&target=' + this.target + '&sort=' + this.sort;

        this.location.replaceState(path);

        console.log('search params... : ' + path)

        return this.http.get('/api/v2/book/' + path).toPromise().then(result => {
            let searched = result.json().data;
            console.log('success to search book, length : ' + searched.documents.length);
            if (searched.documents.length > -1) {
                this.data = searched;
                this.total = searched.total_count > 500 ? 500 : searched.total_count;
            }
        }).catch(err => {
            console.log(err);
        });
    }


    inquiryBook(book: any) {
        console.log(book);
        let params = {
            queryParams: {
                query: this.query,
                page: this.page,
                size: this.size,
                target: this.target,
                sort: this.sort,
                isbn: book.isbn,
                barcode: book.barcode,
                publisher: book.publisher,
                title: book.title,
            }
        };
        console.log(params);
        this.router.navigate(['/book'], params);
    }

    clickSearch() {
        this.page = 1;
        this.postHistory().then(result0 => {
            this.doSearch().then(result1 => {
                this.getHistory().then(result2 => {
                    console.log('success to reload histories');
                });
            });
        });
    }

    getHistory() {
        return this.http.get('/api/v1/histories').toPromise().then(result => {
            console.log(result.json().data);
            if (result.json().data.length > -1) {
                this.histories = result.json().data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    postHistory() {
        return this.http.post('/api/v1/history?keyword=' + this.query, null).toPromise().then(result => {
            console.log('success to post history');
        }).catch(err => {
            console.log('failed to post history : ' + err);
        });
    }

    selectHistory(keyword: string) {
        this.query = keyword;
        this.page = 1;
        this.doSearch().then(result1 => {
            console.log('success to search');
            this.getHistory().then(result2 => {
                console.log('success to reload histories');
            });
        });
    }


    onKeydown(event: any) {
        if (event.keyCode === 13) {
            this.clickSearch();
        }
    }

    // pageChange(p: number) {
    pageChange(p: number) {
        this.page = p;
        this.doSearch();
    }


    hoverEvent(event: any) {
        if (event.type === 'mouseenter') {
            event.target.style.backgroundColor = 'rgb(247, 247, 247)';
        } else {
            event.target.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }

    selectTarget(event: any) {
        this.targetName = event.target.textContent;
        this.target = event.target.value;
    }

    selectSort(event: any) {
        this.sortName = event.target.textContent;
        this.sort = event.target.value;
    }

}
