import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const user = [
            {
                'id': 6,
                'username': 'tes123123t',
                'password': 'null'
            }
        ];
        // http://localhost:8000/api/book/recent
        const recent = [
            {
                'id': 1,
                'userId': 1,
                'keyword': '개미'
            },
            {
                'id': 2,
                'userId': 1,
                'keyword': '알고리즘'
            },
            {
                'id': 3,
                'userId': 1,
                'keyword': '어떻게 살것인가'
            },
            {
                'id': 4,
                'userId': 1,
                'keyword': '이것이 리눅스다'
            },
            {
                'id': 5,
                'userId': 1,
                'keyword': '이펙티브 자바'
            },
            {
                'id': 6,
                'userId': 1,
                'keyword': 'JPA프로그래밍'
            }
        ];

        const bookSearch = {
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
        const book = [
            {
                'documents': [
                    {
                        'authors': [
                            '베르나르 베르베르'
                        ],
                        'barcode': 'BG52040008',
                        'category': '소설',
                        'contents': '',
                        'datetime': '2010-09-15T15:00:00.000+0000',
                        'ebook_barcode': 'DGT00020488010YE',
                        'isbn': '8932903492 9788932903491',
                        'price': '64000',
                        'publisher': '열린책들',
                        'sale_price': '57600',
                        'sale_yn': 'Y',
                        'status': '정상판매',
                        'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788932903491%3Fmoddttm=20180707082859',
                        'title': '개미 (양장)',
                        'translators': [
                            '이세욱'
                        ],
                        'url': 'http://book.daum.net/category/series.do?seriesID=BG52040008'
                    }
                ],
                'pageable_count': 2,
                'total_count': 2,
                '_end': false
            }
        ];

        const bookmark = {
            'id': 8,
            'title': '개미',
            'isbn': '8932903492'
        };

        const bookmarks = [
            {
                'id': 1,
                'title': '개미',
                'isbn': '8932903492'
            },
            {
                'id': 2,
                'title': '어떻게 살 것인가?',
                'isbn': '8956942927'
            },
            {
                'id': 3,
                'title': '자바 병렬프로그래밍',
                'isbn': '115948080X'
            },
            {
                'id': 4,
                'title': '알고리즘 문제 해결 전략',
                'isbn': '8932917876'
            },
            {
                'id': 5,
                'title': 'JPA 프로그래밍',
                'isbn': '1196119589'
            }
        ];
        return {user, bookSearch, recent, book, bookmarks, bookmark};
    }


    // getRootPath(url: string): string {
    //     // 앞쪽에서부터 우선순위
    //     // 변환 예시 : /carrier/api/config/Install => /carrier/api
    //     // collection인 "config" 하위 경로를 제외한
    //     // 상위 경로("/carrier/api")가 root path가 된다.
    //     let collectionNames = ['daemons', 'daemon', 'configs', 'config', 'upgrade', 'service'];
    //     for (let i in collectionNames) {
    //         let collectionIndex = url.indexOf(collectionNames[i]);
    //         if (collectionIndex > 0) {
    //             return url.substring(0, collectionIndex - 1);
    //         }
    //     }
    //     return '/api';
    // }
    //
    // parseUrl(url: string): any {
    //
    //     var config: any = {};
    //     config.host = 'localhost'; // default to app web server host
    //     config.rootPath = this.getRootPath(url); // default to path when app is served (e.g.'/')
    //
    //     let parsedUrl = this.parsedUrl(url, config);
    //
    //     return parsedUrl;
    // }
    //
    // parsedUrl(url: string, config: any): any {
    //     try {
    //         var loc = this.getLocation(url);
    //         var drop = config.rootPath.length;
    //         var urlRoot = '';
    //         if (loc.host !== config.host) {
    //             // url for a server on a different host!
    //             // assume it's collection is actually here too.
    //             drop = 1; // the leading slash
    //             urlRoot = loc.protocol + '//' + loc.host + '/';
    //         }
    //         var path = loc.pathname.substring(drop);
    //         var pathSegments = path.split('/');
    //         var segmentIx = 0;
    //         // apiBase: the front part of the path devoted to getting to the api route
    //         // Assumes first path segment if no config.apiBase
    //         // else ignores as many path segments as are in config.apiBase
    //         // Does NOT care what the api base chars actually are.
    //         var apiBase;
    //         // tslint:disable-next-line:triple-equals
    //         debugger;
    //         if (config.apiBase == undefined) {
    //             apiBase = pathSegments[segmentIx++];
    //         }
    //         else {
    //             apiBase = this.removeTrailingSlash(config.apiBase.trim());
    //             if (apiBase) {
    //                 segmentIx = apiBase.split('/').length;
    //             }
    //             else {
    //                 segmentIx = 0; // no api base at all; unwise but allowed.
    //             }
    //         }
    //         apiBase = apiBase + '/';
    //         var collectionName = pathSegments[segmentIx++];
    //         // ignore anything after a '.' (e.g.,the "json" in "customers.json")
    //         collectionName = collectionName && collectionName.split('.')[0];
    //         var id = pathSegments[segmentIx++];
    //         var query = loc.search && new URLSearchParams(loc.search.substr(1));
    //         var resourceUrl = urlRoot + apiBase + collectionName + '/';
    //         return {base: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl};
    //     }
    //     catch (err) {
    //         var msg = 'unable to parse url \'' + url + '\'; original error: ' + err.message;
    //         throw new Error(msg);
    //     }
    // }
    //
    // getLocation(href: string): any {
    //     if (!href.startsWith('http')) {
    //         // get the document iff running in browser
    //         var doc = (typeof document === 'undefined') ? undefined : document;
    //         // add host info to url before parsing.  Use a fake host when not in browser.
    //         var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
    //         href = href.startsWith('/') ? base + href : base + '/' + href;
    //     }
    //     var uri = this.parseuri(href);
    //     var loc = {
    //         host: uri.host,
    //         protocol: uri.protocol,
    //         port: uri.port,
    //         pathname: uri.path,
    //         search: uri.query ? '?' + uri.query : ''
    //     };
    //     return loc;
    // }
    //
    // parseuri(str: string): any {
    //     // tslint:disable-next-line:max-line-length
    //     var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    //     var key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port',
    //         'relative', 'path', 'directory', 'file', 'query', 'anchor'];
    //     var m = URL_REGEX.exec(str);
    //     var uri = {};
    //     var i = 14;
    //     while (i--) {
    //         uri[key[i]] = m[i] || '';
    //     }
    //     return uri;
    // }
    //
    // removeTrailingSlash(path: string): string {
    //     return path.replace(/\/$/, '');
    // }
}
