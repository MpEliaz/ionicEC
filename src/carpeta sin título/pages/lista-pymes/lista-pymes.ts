import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichaPymePage } from '../ficha-pyme/ficha-pyme';

import { PymesService } from '../../app/services/pymes.service'; 
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-lista-pymes',
  templateUrl: 'lista-pymes.html',
})
export class ListaPymesPage {

	id;
	nombre;
	pymes: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pymesService: PymesService) {

  	this.id = navParams.get("id");
  	this.nombre = navParams.get("nombre");
  	this.pymes = this.pymesService.getPymesByCategoria(this.id);
  	console.log(this.pymes);

  	}

  public goToFicha(pyme){
  	this.navCtrl.push(FichaPymePage, pyme);
  }

}
