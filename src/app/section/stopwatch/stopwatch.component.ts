import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  present = '';
  constructor(private router: Router) {}
  startTime($event: string) {
    this.present = $event;
  }
  goClock() {
    this.router.navigateByUrl('/clock');
  }
}
