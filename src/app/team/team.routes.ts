import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './list/team-list.component';

const teamRoutes: Routes = [
    {
    path: '', component: TeamListComponent
    }
];

export const teamRouting = RouterModule.forChild( teamRoutes );
