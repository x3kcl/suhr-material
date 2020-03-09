import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Card: any = [];

  constructor(
    public restApi: CardService,
  ) {}

  ngOnInit() {
    this.loadHome();
  }

  // Get employees list
  loadHome() {
    return this.restApi.getHome().subscribe((data) => {
      // let items = data.
      console.log(data.data[0]);
      this.Card = data.data;
      // console.log(this.Card);
    });
  }
}
