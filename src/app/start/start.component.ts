import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  deg:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onHoverRecruiter() {
    this.deg = 1;
  };


  onHoverSeeker() {
    this.deg = -1;
  };

  onMouseLeave(){
    this.deg = 0;
  }
};
