import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnChanges {
  @Input() inputData!: string;
  // ! 를쓰는 이유는 inputdata가 undefined 이라서 에러가나는데 우리는 값으 들어올껄 알고있으니 값이
  // 들어올꺼라고 typescript를속이는것

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: number = 0;
  constructor() {
    console.log(this.inputData);
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms += 10;
      if (this.ms === 1000) {
        this.ms = 0;
        this.sec++;
      }
      if (this.sec === 60) {
        this.sec = 0;
        this.min++;
      }
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (let propName in changes) {
      if (propName === 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }
}
