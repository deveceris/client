import {InMemoryDbService} from 'angular-in-memory-web-api';

// https://github.com/angular/in-memory-web-api
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const history = {'keyword' : 'aa'};
        const histories = [
            {
                'message': '',
                'data': [{'id': 6, 'userId': 1, 'keyword': 'JPA프로그래밍'}, {'id': 5, 'userId': 1, 'keyword': '이펙티브 자바'}, {
                    'id': 4,
                    'userId': 1,
                    'keyword': '이것이리눅스다'
                }, {'id': 3, 'userId': 1, 'keyword': '어떻게 살것인가'}, {'id': 2, 'userId': 1, 'keyword': '알고리즘'}, {
                    'id': 1,
                    'userId': 1,
                    'keyword': '개미'
                }]
            }
        ];
        const user = [
            {
                'id': 6,
                'username': 'tes123123t',
                'password': 'null'
            }
        ];

        const search =
            {
                'documents': [{
                    'authors': ['윤석진'],
                    'barcode': 'KOR9791188621279',
                    'category': '컴퓨터/IT',
                    'contents': '자바 기반의 웹 서비스를 가장 쉽고 빠르게 배운다!  시중에는 자바 웹 개발자를 위한 스프링과 JSP 관련 서적이 많이 나와 있긴 하지만, 입문자가 끝까지 따라 할 만한 책은 많지 않습니다...',
                    'datetime': 1530198000000,
                    'ebook_barcode': '',
                    'isbn': '1188621270 9791188621279',
                    'price': '27000',
                    'publisher': '제이펍',
                    'sale_price': '24300',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2Fimage%2FKOR9791188621279%3Fmoddttm=20180731091029',
                    'title': '자바 웹 개발',
                    'translators': [],
                    'url': 'http://book.daum.net/detail/book.do?bookid=KOR9791188621279'
                }, {
                    'authors': ['프란체스코 마르치오니', '마닉 수르타니'],
                    'barcode': 'KOR9788960775244',
                    'category': '컴퓨터/IT',
                    'contents': '『오픈소스 JBoss로 확장형 대용량 시스템 만들기 세트』는《JBoss AS 7 애플리케이션 개발》《JBoss AS 7 따라잡기》《JBoss 인피니스팬 따라잡기》의 3권으로 구성된 세트이다. JBoss...',
                    'datetime': 1392822000000,
                    'ebook_barcode': '',
                    'isbn': '896077524X 9788960775244',
                    'price': '72000',
                    'publisher': '에이콘출판사',
                    'sale_price': '64800',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788960775244%3Fmoddttm=20180731072946',
                    'title': '오픈소스 JBoss로 확장형 대용량 시스템 만들기 세트',
                    'translators': ['최지웅'],
                    'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788960775244'
                }, {
                    'authors': ['Willie Wheeler', 'Joshua White'],
                    'barcode': 'KOR9788963510521',
                    'category': '컴퓨터/IT',
                    'contents': '『스프링 프레임워크의 실제(Spring in Practice)』는 자바 기반의 프로그래밍 기술을 어느 정도 이해하고 있으면서 최신 트렌드에 맞는 기법을 터득하고자 하는 독자들에게 유익한 실전...',
                    'datetime': 1431874800000,
                    'ebook_barcode': '',
                    'isbn': '8963510522 9788963510521',
                    'price': '33000',
                    'publisher': 'ITC',
                    'sale_price': '29700',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788963510521%3Fmoddttm=20180728074231',
                    'title': '스프링 프레임워크의 실제(Spring in Practice)',
                    'translators': ['남정현'],
                    'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788963510521'
                }, {
                    'authors': ['클라렌스 호', '롭 해롭'],
                    'barcode': 'KOR9788998139032',
                    'category': '컴퓨터/IT',
                    'contents': '설명하고 있다. 또한 일반적으로 개발자들에게 익숙한 DAO 레이어를 그대로 사용하는 대신 JPA를 활용해 엔티티매니저를 서비스 레이어로 직접 주입하는 방식을 통해 최신 개발 기법을 설명...',
                    'datetime': 1348758000000,
                    'ebook_barcode': '',
                    'isbn': '8998139030 9788998139032',
                    'price': '45000',
                    'publisher': '위키북스',
                    'sale_price': '40500',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788998139032%3Fmoddttm=20180302060337',
                    'title': '프로 스프링. 3',
                    'translators': ['유윤선'],
                    'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788998139032'
                }, {
                    'authors': ['이일민'],
                    'barcode': 'BOK00018985708BA',
                    'category': '컴퓨터/IT',
                    'contents': 'DB 프로그래밍, 그리고 기초적인 웹 개발 지식이 필요하다. Vol. 2에는 스프링 외의 서드파티 프레임워크나 JavaEE 표준 기술을 스프링에 통합해서 사용하는 내용이 일부 포함되어 있다...',
                    'datetime': 1348153200000,
                    'ebook_barcode': '',
                    'isbn': '8960773425 9788960773424',
                    'price': '40000',
                    'publisher': '에이콘출판',
                    'sale_price': '36000',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK00018985708BA%3Fmoddttm=20180705073742',
                    'title': '토비의 스프링 3.1 Vol. 2: 스프링의 기술과 선택',
                    'translators': [],
                    'url': 'http://book.daum.net/detail/book.do?bookid=BOK00018985708BA'
                }, {
                    'authors': ['최범균'],
                    'barcode': 'KOR9788980782710',
                    'category': '컴퓨터/IT',
                    'contents': '『웹 개발자를 위한 Spring 4.0 프로그래밍』는 스프링 4의 새로운 특징 포함하고 스프링 DI...웹소켓, JDB, 하이버네이트, JPA, MyBatis 연동과 스프링 데이터 JPA, 일반적인 웹...',
                    'datetime': 1407164400000,
                    'ebook_barcode': '',
                    'isbn': '8980782713 9788980782710',
                    'price': '32000',
                    'publisher': '가메',
                    'sale_price': '28800',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788980782710%3Fmoddttm=20180731073055',
                    'title': '웹 개발자를 위한 Spring 4.0 프로그래밍',
                    'translators': [],
                    'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788980782710'
                }, {
                    'authors': ['최범균'],
                    'barcode': 'KOR9788980782901',
                    'category': '컴퓨터/IT',
                    'contents': 'JPA(Java Persistence API)를 시작하려는 개발자를 위한 입문서 『JPA 프로그래밍 입문』. 엔티티, 밸류에 대한 기본 매핑부터 콜렉션 매핑까지 핵심 설정 설명하고 쿼리 방식 조회(JPQL...',
                    'datetime': 1496156400000,
                    'ebook_barcode': '',
                    'isbn': '898078290X 9788980782901',
                    'price': '25000',
                    'publisher': '가메',
                    'sale_price': '22500',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788980782901%3Fmoddttm=20180729075417',
                    'title': 'JPA 프로그래밍 입문',
                    'translators': [],
                    'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788980782901'
                }, {
                    'authors': ['윌리엄스'],
                    'barcode': 'KOR9788998139773',
                    'category': '컴퓨터/IT',
                    'contents': '기존의 자바 웹 개발 기술을 한 단계 끌어올리도록 돕는다. 처음부터 차례로 읽으면서 배우거나 자바 프로그래밍에 대한 구체적인 질문이 있을 때 찾아보는 참고서로도 활용할 수 있다...',
                    'datetime': 1424012400000,
                    'ebook_barcode': '',
                    'isbn': '8998139774 9788998139773',
                    'price': '48000',
                    'publisher': '위키북스',
                    'sale_price': '43200',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FKOR9788998139773%3Fmoddttm=20180219145833',
                    'title': '자바 웹 개발 완벽 가이드',
                    'translators': ['최민석'],
                    'url': 'http://book.daum.net/detail/book.do?bookid=KOR9788998139773'
                }, {
                    'authors': ['게리 막', '조시 롱', '다니엘 루비오'],
                    'barcode': 'BOK0001155669311',
                    'category': '컴퓨터/IT',
                    'contents': '무엇이며, 어떻게 사용하는지 다루는 것부터 AspectJ를 활용한 스프링의 관점지향 프로그래밍 기능, 그루비, 빈쉘, 제이루비 같은 스크립트 언어를 스프링 프레임워크와 함께 사용하는 방법...',
                    'datetime': 1301410800000,
                    'ebook_barcode': '',
                    'isbn': '8992939760 9788992939768',
                    'price': '45000',
                    'publisher': '위키북스',
                    'sale_price': '40500',
                    'sale_yn': 'N',
                    'status': '가격 확인 중',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK0001155669311%3Fmoddttm=20170929060552',
                    'title': '스프링 3 레시피',
                    'translators': ['고종봉', '백기선'],
                    'url': 'http://book.daum.net/detail/book.do?bookid=BOK0001155669311'
                }, {
                    'authors': ['최범균'],
                    'barcode': 'BOK00010572348IN',
                    'category': '컴퓨터/IT',
                    'contents': 'DI, AOP상세한 스프링 MVC 설명 (XML, JSON 등 RESTful 관련 내용 포함)JDBC, 하이버네이트, JPA, iBATIS 연동, 트랜잭션 설정TransactionsEssentials를 이용한 글로벌 트랜잭션 처리JAXB2를...',
                    'datetime': 1277650800000,
                    'ebook_barcode': '',
                    'isbn': '8980782314 9788980782314',
                    'price': '28000',
                    'publisher': '가메',
                    'sale_price': '25200',
                    'sale_yn': 'Y',
                    'status': '정상판매',
                    'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2FBOK00010572348IN%3Fmoddttm=20171022080619',
                    'title': 'SPRING 3.0 프로그래밍',
                    'translators': [],
                    'url': 'http://book.daum.net/detail/book.do?bookid=BOK00010572348IN'
                }
                ],
                'pageable_count': 28,
                'total_count': 28,
                '_end': false

            };
        const inquiry = {
                'authors': [
                    '윤석진'
                ],
                'barcode': 'KOR9791188621279',
                'category': '컴퓨터/IT',
                'contents': '자바 기반의 웹 서비스를 가장 쉽고 빠르게 배운다!  시중에는 자바 웹 개발자를 위한 스프링과 JSP 관련 서적이 많이 나와 있긴 하지만, 입문자가 끝까지 따라 할 만한 책은 많지 않습니다...',
                'datetime': 1530198000000,
                'ebook_barcode': '',
                'isbn': '1188621270 9791188621279',
                'price': '27000',
                'publisher': '제이펍',
                'sale_price': '24300',
                'sale_yn': 'Y',
                'status': '정상판매',
                'thumbnail': 'http://t1.daumcdn.net/thumb/R72x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbook%2Fimage%2FKOR9791188621279%3Fmoddttm=20180731091029',
                'title': '자바 웹 개발',
                'translators': ['남정현'],
                'url': 'http://book.daum.net/detail/book.do?bookid=KOR9791188621279'
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
            'id': 1,
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
        const config = [
            {
                'message': '',
                'data': '0:0:0:0:0:0:0:1'
            }
        ];
        return {user, search, book, bookmarks, bookmark, config, histories, history, inquiry};
    }


    getRootPath(url: string): string {
        // 앞쪽에서부터 우선순위
        // collection인 "config" 하위 경로를 제외한
        let collectionNames = ['history', 'user', 'book', 'bookmarks', 'bookmark', 'config', 'histories', 'search', 'inquiry'];
        for (let i in collectionNames) {
            let collectionIndex = url.indexOf(collectionNames[i]);
            if (collectionIndex > 0) {
                return url.substring(0, collectionIndex - 1);
            }
        }
        return '/api';
    }

    parseUrl(url: string): any {
        var config: any = {};
        config.host = 'localhost'; // default to app web server host
        config.rootPath = this.getRootPath(url); // default to path when app is served (e.g.'/')
        if (url.indexOf('book/search') > 0 || url.indexOf('book/inquiry') > 0) {
            config.apiBase = '/book'
        }
        debugger;
        let parsedUrl = this.parsedUrl(url, config);

        return parsedUrl;
    }

    parsedUrl(url: string, config: any): any {
        try {
            var loc = this.getLocation(url);
            var drop = config.rootPath.length;
            var urlRoot = '';
            if (loc.host !== config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            var path = loc.pathname.substring(drop);
            var pathSegments = path.split('/');
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            var apiBase;
            // tslint:disable-next-line:triple-equals
            if (config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = this.removeTrailingSlash(config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase = apiBase + '/';
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            var id = pathSegments[segmentIx++];
            var query = loc.search && new URLSearchParams(loc.search.substr(1));
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            debugger;
            return {base: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl};
        }
        catch (err) {
            var msg = 'unable to parse url \'' + url + '\'; original error: ' + err.message;
            throw new Error(msg);
        }
    }

    getLocation(href: string): any {
        if (!href.startsWith('http')) {
            // get the document iff running in browser
            var doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            href = href.startsWith('/') ? base + href : base + '/' + href;
        }
        var uri = this.parseuri(href);
        var loc = {
            host: uri.host,
            protocol: uri.protocol,
            port: uri.port,
            pathname: uri.path,
            search: uri.query ? '?' + uri.query : ''
        };
        return loc;
    }
    parseuri(str: string): any {
        // tslint:disable-next-line:max-line-length
        var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port',
            'relative', 'path', 'directory', 'file', 'query', 'anchor'];
        var m = URL_REGEX.exec(str);
        var uri = {};
        var i = 14;
        while (i--) {
            uri[key[i]] = m[i] || '';
        }
        return uri;
    }

    removeTrailingSlash(path: string): string {
        return path.replace(/\/$/, '');
    }
}


// getRootPath(url: string): string {
//     // 앞쪽에서부터 우선순위
//     // collection인 "config" 하위 경로를 제외한
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
