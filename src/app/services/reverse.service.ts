import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseService {
  constructor() { }

  reverse(content: string) : string {
    return content.split('').reverse().join('');
  }
}
