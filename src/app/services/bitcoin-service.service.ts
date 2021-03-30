import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
// const axios = require('axios')
import axios from 'axios'


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor() { }



async  getRate(coins=1) {
  // const rate =await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  // return rate.data
    const rate =0.00002611

    return rate
  }


  async getMarketPrice() {
    const marketPrice =await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    return marketPrice.data
  }
  
  getConfirmedTransactions(){
    
  }


}
