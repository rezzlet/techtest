import { Component, OnInit } from '@angular/core';
import { Team, TeamService } from '../';

@Component({
  selector: 'team-list',
  styleUrls: ['./team-list.component.css'],
  templateUrl: './team-list.component.html'
})

export class TeamListComponent implements OnInit {
    private list: Team[] = new Array<Team>();

    constructor( private dataService: TeamService) {}

    public ngOnInit(): void {

        let subscription: any =  this.dataService.getAll();

        subscription.subscribe(
          ( teams: Team[] ) => {
              this.list = teams;
              subscription.unsubscribe();
          },
          (error) => {
            console.log(error);
          });

    }

    public currentTeams(): Team[] {
      return this.list;
    }

}
