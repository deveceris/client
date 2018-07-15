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

import {HttpClient} from './common/http.client';
import {ProjectkGuard} from './common/guard';
import {MenuComponent} from './menu/menu.component';
import {SignupComponent} from './signup/signup.component';
import {BookComponent} from './book/book.component';
import {PopupComponent} from './common/popup.component';


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
        PopupComponent
    ],
    entryComponents: [
        PopupComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        NgbActiveModal,
        HttpClient,
        {
            provide: HttpClient,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, router: Router) => {
                return new HttpClient(backend, defaultOptions, router);
            },
            deps: [XHRBackend, RequestOptions, Router, NgbModal]
        },
        ProjectkGuard
    ],
    bootstrap: [ProjectK]
})

export class AppModule {
}
