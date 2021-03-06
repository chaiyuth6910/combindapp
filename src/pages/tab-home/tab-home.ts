import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }
  register() {
    //this.navCtrl.push(RegisterPage);
    this.app.getRootNav().push(RegisterPage);
  }
}
