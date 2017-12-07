import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';

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

		let data = this.db.list('pymes');
		console.log(data);
	}
}