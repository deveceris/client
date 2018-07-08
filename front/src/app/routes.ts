import {RouterModule} from '@angular/router';

import {Login} from './login';
import {Home} from './home';
import {Search} from './search/search';
import {Bookmark} from './bookmark/bookmark';
import {ProjectkGuard} from './common/guard';
import {SignupComponent} from './signup/signup.component';
import {BookComponent} from './book/book.component';

export const Route = RouterModule.forRoot([
    {
        path: 'login',
        component: Login,
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
        component: Home,
        canActivate: [ProjectkGuard],
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'search',
                component: Search
            },
            {
                path: 'bookmark',
                component: Bookmark
            }
        ]
    }
])
