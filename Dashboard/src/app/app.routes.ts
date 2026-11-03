import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';
// import { OverviewComponent } from './overview/overview.component';
// import { DetailsComponent } from './details/details.component';
// import { SettingsComponent } from './settings/settings.component';


export const routes: Routes = [

    {
        path: '', component: LayoutComponent,
    
    children: [

            //  { path: '', component: OverviewComponent },
            // { path: 'details', component: DetailsComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    }
];

