
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TeamItemComponent } from './item/team-item.component';
import { TeamListComponent } from './list/team-list.component';

import { TeamService } from './team.service';
import { teamRouting } from './team.routes';

@NgModule({
  imports: [ CommonModule, teamRouting ],
  declarations: [ TeamItemComponent, TeamListComponent ],
  providers: [ TeamService ],
  exports: [ TeamListComponent ]
})
export class TeamModule {
}
