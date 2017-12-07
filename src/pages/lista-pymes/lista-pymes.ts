import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PymesService } from '../../app/services/pymes.service'; 

/**
 * Generated class for the ListaPymesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-pymes',
  templateUrl: 'lista-pymes.html',
})
export class ListaPymesPage {

	public id; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public pymesService: PymesService) {

  	this.id = navParams.get("id");
  	pymesService.getPymesByCategoria(this.id); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPymesPage');
  }

}
