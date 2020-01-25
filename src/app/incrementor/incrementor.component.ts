import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.scss']
})
export class IncrementorComponent implements OnInit {
  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onIncrement() {
    this.value++;
  }
}
