import { Component, Input } from '@angular/core';
import { Team } from '../';

@Component({
  selector: 'team-item',
  styleUrls: ['./team-item.component.css'],
  templateUrl: './team-item.component.html'
})

export class TeamItemComponent {
  @Input() public data: Team;
}
