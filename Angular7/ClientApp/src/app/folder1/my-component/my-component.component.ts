import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

    @Input() hero: Hero;
  constructor() { }

    ngOnInit() {
        this.hero.name = "Hoang Nhan";
  }

}
