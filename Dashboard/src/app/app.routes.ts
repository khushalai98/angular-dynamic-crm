import { Routes } from '@angular/router';
import { SettingsComponent } from './Pages/settings/settings.component';
import { WorksspaceComponent } from './Pages/worksspace/worksspace.component';
import { AddnewuserComponent } from './Pages/addnewuser/addnewuser.component';

export const routes: Routes = [
    {
        path: 'settings', component: SettingsComponent
    },

    {
        path: 'worksspace', component: WorksspaceComponent
    },

    {
        path: 'addnewuser', component: AddnewuserComponent
    },
];
