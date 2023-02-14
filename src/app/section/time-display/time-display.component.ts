import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnChanges {
  @Input() inputData!: string;
  // ! 를쓰는 이유는 inputdata가 undefined 이라서 에러가나는데 우리는 값으 들어올껄 알고있으니 값이 들어올꺼라고 typescript를속이는것
  test = 1;
  constructor() {
    console.log(this.inputData);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
