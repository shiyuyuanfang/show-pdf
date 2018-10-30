import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

//引入图片预览页面
import {ShowpdfPage} from "../showpdf/showpdf";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  //点击预览文件按钮
  checkUrl(){
    var url= 'https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.pdf'; //测试数据
    let modal = this.modalCtrl.create(ShowpdfPage, {
      displayData: {
        pdfSource: {
          url: url
        }
      }
    });
    modal.present();
  }
}
