import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaPymesPage } from '../lista-pymes/lista-pymes';


@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

	categorias = [
		{id: 1, nombre: "Donde dormir?", imagen: "http://i4.visitchile.com/img/GalleryContent/4308/slider/Chiloe.jpg"},
		{id: 2, nombre: "Donde comer?", imagen: "http://i4.visitchile.com/img/GalleryContent/4308/slider/Chiloe.jpg"},
		{id: 3, nombre: "Qué hacer?", imagen: "http://i4.visitchile.com/img/GalleryContent/4308/slider/Chiloe.jpg"},
		{id: 4, nombre: "Qué visitar?", imagen: "http://i4.visitchile.com/img/GalleryContent/4308/slider/Chiloe.jpg"},
		{id: 5, nombre: "Informaciones", imagen: "http://i4.visitchile.com/img/GalleryContent/4308/slider/Chiloe.jpg"},
	]

	@ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public goListaCategoria(id){
  	this.navCtrl.push(ListaPymesPage, {id: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
