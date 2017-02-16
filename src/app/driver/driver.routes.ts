import { RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from './list/driver-list.component';

const driverRoutes: Routes = [
    {
    path: 'drivers/:teamId', component: DriverListComponent
    }
];

export const driverRouting = RouterModule.forChild( driverRoutes );
