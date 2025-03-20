import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailPage } from './detail.page';

@NgModule({
  declarations: [DetailPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{path:'',component:DetailPage}])
  ],

})
export class DetailPageModule {}
