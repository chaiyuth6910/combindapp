import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import{WebapiServiceProvider} from '../../providers/webapi-service/webapi-service'
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //กำหนดตัวแปรผูกฟอร์ม (model)
  userData={
    "fullname":"",
    "email":"",
    "tel":"",
    "username":"",
    "password":"",
  }

  //ตัวแปรรรับข้อมูล api
  responsedata:any;


  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public app:App,
    public alertCtrl: AlertController,
    public webapi: WebapiServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

login(){
  this.navCtrl.setRoot(LoginPage);
}

gotoDashboard(){
this.navCtrl.setRoot(TabsPage);
}
signup(){
console.log(this.userData);
}

}