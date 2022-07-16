import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x0',
  templateUrl: './x0.component.html',
  styleUrls: ['./x0.component.css']
})
export class X0Component implements OnInit {

  finished: boolean;
  cells: string[];
  currentPlayer: string;

  constructor() {
    this.finished = false;
    this.cells = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];
    this.currentPlayer = 'X';
  }

  clickedCell(index: number): void {
    if (this.cells[index] != '') return;
    this.cells[index] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? '0': 'X';
    this.checkComplete();
  }

  checkComplete(): void {
    this.checkThreeValues(this.cells.filter(
      (val, idx) => idx < 3
    ));
  }

  checkThreeValues(values: string[]): void {
    if (values.every((val) => val === 'X') ||
      values.every((val) => val === '0')) {
        this.finished = true;
      }
  }

  ngOnInit(): void {
  }

}
