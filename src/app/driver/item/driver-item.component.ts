import { Component, Input } from '@angular/core';
import { Driver } from '../driver';

@Component({
  selector: 'driver-item',
  styleUrls: ['./driver-item.component.css'],
  templateUrl: './driver-item.component.html'
})

export class DriverItemComponent {
  @Input() public data: Driver;
}
