import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-logged',
  templateUrl: './home-page-logged.component.html',
  styleUrls: ['./home-page-logged.component.css']
})
export class HomePageLoggedComponent implements OnInit {

  constructor() { }
  @Input() userName = "";
  ngOnInit(): void {
  }

}
