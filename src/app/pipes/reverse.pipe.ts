import { ReverseService } from './../services/reverse.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  constructor(private reverseService: ReverseService) {}

  transform(content: string): string {
    return this.reverseService.reverse(content);
  }

}
