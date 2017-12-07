import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PymesService } from '../../app/services/pymes.service'; 

@IonicPage()
@Component({
  selector: 'page-lista-pymes',
  templateUrl: 'lista-pymes.html',
})
export class ListaPymesPage {

	public id;
	public pymes = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public pymesService: PymesService) {

  	this.id = navParams.get("id");
  	pymesService.getPymesByCategoria(this.id)
  	.subscribe(pymes => {
  		this.pymes = pymes;
  	}); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPymesPage');
  }

}
