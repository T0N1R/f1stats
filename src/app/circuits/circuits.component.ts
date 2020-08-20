import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {

  redBullRing = '../assets/circuit/RedBullRing.png';
  redBullRingLandscape = '../assets/circuit/RedBullRingPic.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
