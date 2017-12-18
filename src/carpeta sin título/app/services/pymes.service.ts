import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PymesService{

	pymes = [];

	constructor(public db: AngularFireDatabase){}

	public getPymes() {
		
		//return this.pymes;
	}

	public getPyme(id){

		return this.pymes.filter(function(e, i){ return e.id == id})[0] || {}; 
	}

	public getPymesByCategoria(id_categoria){

		return this.db.list('/pymes').valueChanges();
		//console.log(id_categoria);
		//console.log(data);
	}
}