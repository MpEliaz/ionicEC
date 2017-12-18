import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichaPymePage } from './ficha-pyme';

@NgModule({
  declarations: [
    FichaPymePage,
  ],
  imports: [
    IonicPageModule.forChild(FichaPymePage),
  ],
})
export class FichaPymePageModule {}
