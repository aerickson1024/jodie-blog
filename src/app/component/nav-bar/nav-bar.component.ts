import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Navbar';
  }

  ngOnInit(): void {
  }

}
