import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter<string>();

  constructor() {}
  start() {
    this.clickEvent.emit('버튼이 주는값');
  }
}
