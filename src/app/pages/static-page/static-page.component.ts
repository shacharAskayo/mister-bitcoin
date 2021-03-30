import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { BitcoinService } from 'src/app/services/bitcoin-service.service';

@Component({
  selector: 'static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  marketPrice = null;
  myOptions = {
    colors: ['orange'],
  };
  chartColumns=['a','b','c']

  async ngOnInit() {
    var marketTimeLine = []
    var x = await this.bitcoinService.getMarketPrice()// there is another way to get the data?
    x.values.map(xy => marketTimeLine.push([xy.x, xy.y]))
    this.marketPrice = marketTimeLine

  }

}
