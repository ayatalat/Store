import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-scan-bar-code',
  templateUrl: 'scan-bar-code.html',
})
export class ScanBarCodePage {

  options: BarcodeScannerOptions;
  result: {};

  constructor(private barCode:BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  async scanBarCode() {

    this.options = {
      prompt: 'Scan the bar code to see the result'
    }

    this.result = await this.barCode.scan(this.options);
    console.log(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanBarCodePage');
  }

}
