import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '../common/http.client';

@Component({
    selector: 'config-file',
    template: `
        <pre>{{configFile?.text}}</pre>
    `
})

export class BookmarkFile implements OnInit {

    @Input('configFileName') configFileName: string;

    private configFile: File;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getConfigFile();
    }

    private getConfigFile() {
        if (!this.configFile) {
            this.http.get('/api/config/' + this.configFileName).toPromise().then(result => {
                this.configFile = result.json().data;
            });
        }
    }
}

class File {
    name: string;
    location: string;
    text: string;
}
