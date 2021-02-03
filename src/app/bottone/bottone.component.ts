import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.scss']
})
export class BottoneComponent implements OnInit {
  @Input() buttonName: string = "Button";
  @Output() buttonClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.buttonClickEvent.emit();
  }
}
