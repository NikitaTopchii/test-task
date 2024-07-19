import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolarArcItemsRendererComponent } from './solar-arc-items-renderer/solar-arc-items-renderer.component';
import { Item } from '../shared/item';

const seeds: Item[] = [
  {
    name: 'A',
    children: [],
  },
  {
    name: 'B',
    children: [
      {
        name: 'BA',
        children: [
          {
            name: 'BBA',
            children: [],
          },
        ],
      },
      {
        name: 'BB',
        children: [],
      },
    ],
  },
  {
    name: 'C',
    children: [
      {
        name: 'CA',
        children: [],
      },
    ],
  },
];

@Component({
  templateUrl: 'app.component.html',
  selector: 'app-root',
  standalone: true,
  imports: [SolarArcItemsRendererComponent],
})
export class AppComponent {
  readonly items: Item[] = seeds;
}
