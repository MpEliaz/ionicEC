import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPymesPage } from './lista-pymes';

@NgModule({
  declarations: [
    ListaPymesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPymesPage),
  ],
})
export class ListaPymesPageModule {}
