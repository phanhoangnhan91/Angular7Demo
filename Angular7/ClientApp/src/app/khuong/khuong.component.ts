import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-khuong',
  templateUrl: './khuong.component.html',
  styleUrls: ['./khuong.component.css']
})
export class KhuongComponent implements OnInit {

    constructor() { }
    @Input() values: [];
  ngOnInit() {
  }

}
