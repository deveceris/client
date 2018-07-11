import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {Route} from './routes';

import {LoginComponent} from './login.component';
import {HomeComponent} from './home.component';
import {ProjectK} from './projectk';
import {SearchComponent} from './search/search.component';
import {BookmarkComponent} from './bookmark/bookmark.component';

import {Popup} from './common/popup';

import {HttpClient} from './common/http.client';
import {ProjectkGuard} from './common/guard';
import {MenuComponent} from './menu/menu.component';
import {SignupComponent} from './signup/signup.component';
import {BookComponent} from './book/book.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        HttpModule,
        Route,
        process.env.ENV !== 'production' ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
    ],
    declarations: [
        LoginComponent,
        HomeComponent,
        ProjectK,
        MenuComponent,
        SearchComponent,
        BookmarkComponent,
        SignupComponent,
        BookComponent,
        Popup
    ],
    entryComponents: [
        Popup
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        NgbActiveModal,
        HttpClient,
        NgbModal,
        {
            provide: HttpClient,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, router: Router, modalService: NgbModal) => {
                return new HttpClient(backend, defaultOptions, router, modalService);
            },
            deps: [XHRBackend, RequestOptions, Router, NgbModal]
        },
        ProjectkGuard
    ],
    bootstrap: [ProjectK]
})

export class AppModule {
}
