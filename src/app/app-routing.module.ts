import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailPage } from './pages/detail/detail.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //    path: '',
  //   redirectTo: 'home',
  //    pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'detail',
  //   loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  // },
  // {
  //   path: 'detail',
  //   loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  // },
  {
    path:'',
    component:HomePage
  },
  {
    path:'detail/:id',
    component:DetailPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
