import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{path:'',component:HomePage}])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
