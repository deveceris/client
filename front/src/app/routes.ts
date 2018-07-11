import {RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';
import {HomeComponent} from './home.component';
import {SearchComponent} from './search/search.component';
import {BookmarkComponent} from './bookmark/bookmark.component';
import {ProjectkGuard} from './common/guard';
import {SignupComponent} from './signup/signup.component';
import {BookComponent} from './book/book.component';

export const Route = RouterModule.forRoot([
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'book/:isbn',
        component: BookComponent
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [ProjectkGuard],
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'bookmark',
                component: BookmarkComponent
            }
        ]
    }
])
