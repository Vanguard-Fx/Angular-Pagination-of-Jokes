import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.scss']
})
export class TitoloComponent implements OnInit {
  @Input() titolo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
