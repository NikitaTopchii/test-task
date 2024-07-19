import { Component, Input } from '@angular/core';
import { Item } from '../../shared/item';
import { DelimetrPipe } from '../../core/delimetr.pipe';

@Component({
  selector: 'app-solar-arc-items-renderer',
  standalone: true,
  imports: [DelimetrPipe],
  templateUrl: './solar-arc-items-renderer.component.html',
})
export class SolarArcItemsRendererComponent {
  @Input() items: Item[] = [];
  @Input() depth: number = 0;

  getMutableArray(items: ReadonlyArray<Item>): Item[] {
    return items as Item[];
  }
}
