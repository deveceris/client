import {Component, OnInit} from '@angular/core';
import {HttpClient} from '../common/http.client';
import {Router} from '@angular/router';

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
                            <button (click)="selectSort($event)" class="dropdown-item" value="accuracy">정확도순</button>
                            <button (click)="selectSort($event)" class="dropdown-item" value="recency">최신순</button>
                            <button (click)="selectSort($event)" class="dropdown-item" value="sales">판매량순</button>
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
                        class="list-group-item d-flex justify-content-between align-items-center" (click)="selectBook(book.isbn)">
                        {{ book.title }} / {{book.authors[0]}} / {{book.publisher}} /({{book.isbn}})
                    </li>
                </ul>
            </div>
            <ngb-pagination class="d-flex justify-content-center" [maxSize]="5" [collectionSize]="total"
                            [(page)]="page" (pageChange)="pageChange($event)"></ngb-pagination>
        </div>
    `,
})
export class SearchComponent implements OnInit {

    page = 1;   // 페이지 (페이지 번호는 total / size로 결정된다)
    size = 10; // 페이지당 보여줄 결과
    total = 10; // 검색어에 검색된 문서수
    query = '';
    sortName = '정확도순';
    sort = 'accuracy';
    targetName = '전체';
    target = 'all';
    data: any = {};
    histories: any = {};
    // TODO 데이터 삭제할 것
    testdata: any = {
        'documents': [
            {
                'authors': [
                    '베르나르 베르베르'
                ],
                'barcode': 'KOR9788932903491',
                'category': '소설',
                'contents': '프랑스의 천재 작가 베르나르 베르베르의 개미(전3권)과 개미 이야기 완결판 개미 혁명(전3권)이 2001년 1월 개미로 합쳐져 총 5권으로 출간됐다. 1993년 처음 선보인 개미 1부 개미, 2...',
                'datetime': '2010-09-15T15:00:00.000+0000',
                'ebook_barcode': 'DGT00020488010YE',
                'isbn': '8932903492 9788932903491',
                'price': '64000',
                'publisher': '열린책들',
                'sale_price': '57600',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788932903491%3Fmoddttm=20180707082859',
                'title': '개미',
                'translators': [
                    '이세욱'
                ],
                'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788932903491'
            },
            {
                'authors': [
                    '한국자연관찰탐구회'
                ],
                'barcode': 'BOK00030726472YE',
                'category': '어린이(초등)',
                'contents': '생동감 넘치는 다큐멘터리식으로 꾸며진「다큐멘터리 자연관찰 트윙클」 시리즈. 아이들이 자연의 신비함과 소중함을 자연스럽게 깨닫도록 구성했다. 살아 있는 듯한 생생한 사진과 깊이...',
                'datetime': '2016-05-31T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '8956942927 9788956942926',
                'price': '11000',
                'publisher': '키즈덤하우스',
                'sale_price': '9900',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK00030726472YE%3Fmoddttm=20180417060415',
                'title': '개미',
                'translators': [],
                'url': 'http://book.daum.net/detail/book.do?bookid=BOK00030726472YE'
            },
            {
                'authors': [
                    '편집부'
                ],
                'barcode': 'KOR9791159480805',
                'category': '유아(0~7세)',
                'contents': '꼬마 지팡이 자연 동화 『부지런한 개미』. 아이들이 가장 좋아하는 동물들의 이야기로 알차게 엮었어요. 동물들이 주인공으로 등장해 아이들이 더 좋아하는 꼬마지팡이 자연 동화! 아이들의...',
                'datetime': '2016-05-31T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '115948080X 9791159480805',
                'price': '4000',
                'publisher': '그린키즈',
                'sale_price': '3600',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/P72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9791159480805%3Fmoddttm=20180618060338',
                'title': '개미',
                'translators': [],
                'url': 'http://book.daum.net/detail/book.do?bookid=KOR9791159480805'
            },
            {
                'authors': [
                    '편집부'
                ],
                'barcode': 'BOK00022256072IN',
                'category': '유아(0~7세)',
                'contents': '[리틀자연픽처북 시리즈]선명하고 생생한 동물사진으로 가득찬 미리배우는 자연탐구',
                'datetime': '2011-12-31T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '8965861551 9788965861553',
                'price': '8000',
                'publisher': '월드베스트',
                'sale_price': '7200',
                'sale_yn': 'N',
                'status': '가격 확인 중',
                'thumbnail': 'http://t1.daumcdn.net/thumb/P72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK00022256072IN%3Fmoddttm=20180219145833',
                'title': '개미',
                'translators': [],
                'url': 'http://book.daum.net/detail/book.do?bookid=BOK00022256072IN'
            },
            {
                'authors': [
                    '베르나르 베르베르'
                ],
                'barcode': 'BOK00034903210YE',
                'category': '소설',
                'contents': '막심 고리끼 『어머니』, 니코스 카잔차키스의 『그리스인 조르바』, 베르나르 베르베르의 [개미 3부작]의 제1부 『개미』, 조르주 심농의 매그레 시리즈 중 4편을 수록한 『갈레 씨, 홀로...',
                'datetime': '2016-09-14T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '8932917876 9788932917870',
                'price': '10000',
                'publisher': '열린책들',
                'sale_price': '9000',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2Fimage%2FBOK00034903210YE%3Fmoddttm=20180707082656',
                'title': '개미',
                'translators': [
                    '임호경',
                    '이세욱'
                ],
                'url': 'http://book.daum.net/detail/book.do?bookid=BOK00034903210YE'
            },
            {
                'authors': [
                    '전석'
                ],
                'barcode': 'BOK00033247462YE',
                'category': '경제/경영',
                'contents': '초보자도 쉽게 이해하는 주식 공부! 처음 기술적 분석을 공부하다가 힘들다고 포기하는 부분이 바로 &#39;캔들과 거래량&#39;이다. 그 이유는 병렬적 그림의 나열과 암기 강요로 인한 피로감 때문...',
                'datetime': '2017-11-26T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '1196119589 9791196119584',
                'price': '18000',
                'publisher': '오베이북스',
                'sale_price': '16200',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK00033247462YE%3Fmoddttm=20180708072617',
                'title': '개미대학 세력의 매집원가 구하기(주식 최단기간 고수되기)',
                'translators': [],
                'url': 'http://book.daum.net/detail/book.do?bookid=BOK00033247462YE'
            },
            {
                'authors': [
                    '로랑 켈러',
                    '엘리자베스 고르동'
                ],
                'barcode': 'KOR9788959791583',
                'category': '과학',
                'contents': '지구를 지배하는 작은 생물, 개미의 신비를 파헤치다!  신비하고 매혹적인 개미의 세계를 소개하는 교양과학서『개미』. 여러 종류의 개미와 특성, 생태에 대해 알기 쉽고 재미있게 설명하는...',
                'datetime': '2009-10-28T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '895979158X 9788959791583',
                'price': '13600',
                'publisher': '작은책방',
                'sale_price': '12240',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788959791583%3Fmoddttm=20140710073008',
                'title': '개미',
                'translators': [
                    '양진성'
                ],
                'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788959791583'
            },
            {
                'authors': [
                    '이경민',
                    '이혜경'
                ],
                'barcode': 'BOK00010692722YO',
                'category': '인문',
                'contents': '영유아를 위한 주제별 과학 활동 교재 『개미』. 과학 주제를 과학적 개념을 중심으로 활동을 다양하게 진행함으로써 탐구능력과 과학적 태도는 물론 과학적 개념 형성을 돕도록 구성되어...',
                'datetime': '2010-05-24T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '895809107X 9788958091073',
                'price': '12000',
                'publisher': '정민사',
                'sale_price': '12000',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK00010692722YO%3Fmoddttm=20180403145049',
                'title': '개미',
                'translators': [],
                'url': 'http://book.daum.net/detail/book.do?bookid=BOK00010692722YO'
            },
            {
                'authors': [
                    '이지치 에이신'
                ],
                'barcode': 'KOR9788991563797',
                'category': '어린이(초등)',
                'contents': '생태 관찰 백과사전『호기심 가득! - 벌레들의 한살이』시리즈 제5권 ≪개미≫. 이 시리즈는 벌레에 흥미를 가지기 시작한 아이에게 우리 주변에서 볼 수 있는 벌레의 생태를 생생한 사진...',
                'datetime': '2005-07-03T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '8991563791 9788991563797',
                'price': '10000',
                'publisher': '몬테소리CM',
                'sale_price': '3500',
                'sale_yn': 'N',
                'status': '가격 확인 중',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788991563797%3Fmoddttm=20160107070547',
                'title': '개미',
                'translators': [
                    '장상욱'
                ],
                'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788991563797'
            },
            {
                'authors': [
                    '노혜찬'
                ],
                'barcode': 'KOR9788995529416',
                'category': '소설',
                'contents': '불량청소년에서 건달로, 그리고 깡패 두목에서 국회의원까지의 드라마틱한 인생을 살아온 홍성두라는 인물의 인생기를 담는다. 아웃사이더에 불과했던 주인공이 온갖 권모술수를 서서 출세를...',
                'datetime': '2004-04-21T15:00:00.000+0000',
                'ebook_barcode': '',
                'isbn': '8995529415 9788995529416',
                'price': '9000',
                'publisher': '방동',
                'sale_price': '3000',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788995529416%3Fmoddttm=20160105074604',
                'title': '개미',
                'translators': [],
                'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788995529416'
            }
        ],
        'pageable_count': 1000,
        'total_count': 1000,
        '_end': false
    };

    constructor(private http: HttpClient, private router: Router) {

    }

    ngOnInit(): void {
        this.getHistory();
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
        this.doSearch().then(result1 => {
            console.log('success to search');
            this.getHistory().then(result2 => {
                console.log('success to reload histories');
            });
        });
    }

    selectTarget(event: any) {
        this.targetName = event.target.textContent;
        this.target = event.target.value;
    }

    selectSort(event: any) {
        this.sortName = event.target.textContent;
        this.sort = event.target.value;
    }

    selectBook(isbn: string) {
        let isbnNumber = isbn.split(' ')[0];
        alert(isbnNumber);
        this.router.navigate(['/book/' + isbnNumber]);
    }

    pageChange(p: number) {
        this.page = p;
        this.doSearch();
    }

    clickSearch() {
        this.postHistory().then(result0 => {
            this.doSearch().then(result1 => {
                this.getHistory().then(result2 => {
                    console.log('success to reload histories');
                });
            });
        });

    }

    onKeydown(event: any) {
        if (event.keyCode === 13) {
            this.clickSearch();
        }
    }

    doSearch() {
        // /api/book/search
        // query, page, size, target

        // "pageable_count": 1000,  //total_count 중에 노출가능 문서수
        // "total_count": 1000,     //검색어에 검색된 문서수
        // "_end": false            //현재 페이지가 마지막 페이지인지 여부. 값이 false이면 page를 증가시켜 다음 페이지를 요청할 수 있음.
        console.log('search params...');
        console.log('query : ' + this.query + ', page : ' + this.page + ', size : ' + this.size + ', target : ' + this.target + ', sort : ' + this.sort);
        let url = '/api/v1/book/search' + '?query=' + this.query + '&page=' + this.page + '&size=' + this.size + '&target=' + this.target + '&sort=' + this.sort;
        return this.http.get(url).toPromise().then(result => {
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
}
