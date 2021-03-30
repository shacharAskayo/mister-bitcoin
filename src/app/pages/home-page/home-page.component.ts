import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { BitcoinService } from 'src/app/services/bitcoin-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private bitCoinService: BitcoinService, private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  user
  rate: number
  usd: number
  myMoney
  btcToUsd

  async ngOnInit() {
    this.rate = await this.bitCoinService.getRate()
    // this.route.data.subscribe(res => {
    //   console.log(res);
    //   if (res.user) return this.user = res.user
    //   else {
      const user = this.userService.loadFromStorage('user')
      this.user = user
      //   }
      // })
    this.setUsd(this.rate)
    const BTU = 1 / this.rate
    this.btcToUsd = BTU.toFixed(0)
    console.log(this.user);
  }
  setUsd(rate) {
    console.log(rate * 100);
    const myMoney = (1 / rate) * this.user.coins
    this.myMoney = myMoney.toFixed(2)
    console.log(this.myMoney);


  }





}

