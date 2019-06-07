import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

    constructor() { }
    hero: Hero = new Hero();

    ngOnInit() {
        this.hero.id = 1;
        this.hero.name = "nhan";
  }

}
