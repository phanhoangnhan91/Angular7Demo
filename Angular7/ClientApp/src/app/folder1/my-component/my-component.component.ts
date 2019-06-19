import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { Shared } from '../../service/shared-service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

    @Input() hero: Hero;
    constructor(private shared: Shared) { }

    ngOnInit() {
        this.hero.name = "Hoang Nhan";
  }

}
