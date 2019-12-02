import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, PathNotFoundComponent } from './core';
import { DepartmentComponent, UsersComponent, AuthGuard } from '.';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DocComponent } from './doc/doc.component';
import { DocInfoComponent } from './doc/doc-info/doc-info.component';
import { ContactComponent } from './core/components/contact/contact.component';

const routes: Routes = [
    {
        path: 'home',
        component: DepartmentComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'user',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'doc',
        component: DocComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'doc/:id',
        component: DocInfoComponent,
    },
    {
        path: 'registration',
        component: RegistrationFormComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PathNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
