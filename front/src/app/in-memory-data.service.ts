import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const daemons = ['NGINX', 'WEBMAIL', 'WEBADMIN', 'DB', 'TERRACOTTA', 'NOTIFIER', 'SEARCHER', 'ACTIVEMQ', 'TMTAD', 'T4IMAP', 'POPD', 'TREMOTED', 'TMSS', 'SPAMRD', 'CYREND', 'DBPROXY', 'MEMCACHED', 'LADMIN'];

        const daemon = [
            {
                'id': 'NGINX',
                'name': 'NGINX',
                'status': 'STARTING',
                'warningCount': 1,
                'warningMessages': ['aaaa'],
                'logs': ['\\opt\\TerraceTims\\log\\nginx']
            },
            {
                'id': 'WEBMAIL',
                'name': 'WEBMAIL',
                'status': 'STARTUP',
                'logs': ['\\opt\\TerraceTims\\log\\webmail', '\\opt\\TerraceTims\\log\\go_user', '\\opt\\TerraceTims\\log\\catalina\\webmail']
            },
            {'id': 'WEBADMIN', 'name': 'WEBADMIN', 'status': 'STARTUP', 'logs': []},

            {'id': 'DB', 'name': 'DB', 'status': 'STOPPING', 'logs': []},

            {'id': 'TERRACOTTA', 'name': 'TERRACOTTA', 'status': 'STARTING', 'logs': []},
            {'id': 'NOTIFIER', 'name': 'NOTIFIER', 'status': 'STARTUP', 'warningCount': 1, 'warningMessages': ['aaaa'], 'logs': []},
            {'id': 'SEARCHER', 'name': 'SEARCHER', 'status': 'STARTUP', 'logs': []},
            {'id': 'ACTIVEMQ', 'name': 'ACTIVEMQ', 'status': 'STOP', 'logs': []},

            {'id': 'TMTAD', 'name': 'TMTAD', 'status': 'STARTING', 'warningCount': 2, 'warningMessages': ['aaaa', 'bbb'], 'logs': []},
            {'id': 'T4IMAP', 'name': 'T4IMAP', 'status': 'STOPPING', 'warningCount': 1, 'warningMessages': ['aaaa'], 'logs': []},
            {'id': 'POPD', 'name': 'POPD', 'status': 'STARTUP', 'logs': []},
            {
                'id': 'TREMOTED',
                'name': 'TREMOTED',
                'status': 'STARTING',
                'warningCount': 3,
                'warningMessages': ['aaaa', 'bbbb', 'cccc'],
                'logs': []
            },
            {'id': 'TMSS', 'name': 'TMSS', 'status': 'STARTUP', 'logs': []},
            {'id': 'SPAMRD', 'name': 'SPAMRD', 'status': 'STOP', 'logs': []},
            {'id': 'CYREND', 'name': 'CYREND', 'status': 'STOPPING', 'warningCount': 1, 'warningMessages': ['aaaa'], 'logs': []},
            {'id': 'DBPROXY', 'name': 'DBPROXY', 'status': 'STOP', 'logs': []},
            {'id': 'MEMCACHED', 'name': 'MEMCACHED', 'status': 'STARTUP', 'logs': []},

            {'id': 'LADMIN', 'name': 'LADMIN', 'status': 'STARTING', 'logs': []}
        ];

        const configs = [
            'Install'
        ];

        const config = [
            {
                'id': 'Install',
                'name': 'Install;',
                'location': '/opt/TerraceTims/config/installinfo.config',
                'text': 'Installation Version : 2.4.6.6'
            },
            {'id': 'reload', 'message': 'Bookmark reload completed.'}
        ];

        const upgrade = [
            {'id': 'evolution', 'value': 'success'}
        ];

        const service = [
            {'id': 'access', 'message': '서비스 정검 중입니다.', 'maintenance': true}
        ];

        const userCreate = [
            {
                'id': 6,
                'username': 'tes123123t',
                'password': 'null'
            }
        ];

        return {daemons, daemon, configs, config, upgrade, service, userCreate};
    }

    getRootPath(url: string): string {
        // 앞쪽에서부터 우선순위
        // 변환 예시 : /carrier/api/config/Install => /carrier/api
        // collection인 "config" 하위 경로를 제외한
        // 상위 경로("/carrier/api")가 root path가 된다.
        let collectionNames = ['daemons', 'daemon', 'configs', 'config', 'upgrade', 'service', 'userCreate'];
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

        let parsedUrl = this.parsedUrl(url, config);

        //parsedUrl.base = "service/daemon";
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
