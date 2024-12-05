import { Routes } from '@angular/router';
import { CompleteRoutingComponent } from './complete-routing/complete-routing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: "completeRouting", component: CompleteRoutingComponent
    },
    {
        path: "**", component: NotFoundComponent
    }, {
        path: "about", component: AboutComponent, children: [
            { path: "us", component: AboutUsComponent },
            { path: "company", component: AboutCompanyComponent }
        ]
    }
];
