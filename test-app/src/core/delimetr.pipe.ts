import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delimetr',
  standalone: true
})
export class DelimetrPipe implements PipeTransform {

  transform(depth: number): string {
    return '+'.repeat(depth);
  }

}
