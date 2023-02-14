import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  present = 'hi';
  constructor() {}
  startTime($event: string) {
    this.present = $event;
  }
  //starTime은 present의값을 자식 컴포넌트로부터 받은 값을 할당시켜준다
}
