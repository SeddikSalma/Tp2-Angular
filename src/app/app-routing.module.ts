import { AddCvComponent } from './cv-clean/add-cv/add-cv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RouterParamComponent } from './components/router-param/router-param.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { Ex1Component } from "./ex1/ex1.component";
import { Ex2Component } from "./ex2/ex2.component";
import { MergeComponent } from "./merge/merge.component"
import { ProductComponent } from "./product/product.component"
import { CanDeactivateGuard } from './cv-clean/add-cv/can-deactivate.guard';
import { AppCustomPreloader } from './app-custom-preloader.strategy';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: 'cv',
        loadChildren: () => import('./cv-clean/cv-clean.module').then(m => m.CvCleanModule),
        data: {
          preload: true
        }
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },

      { path: 'route/:quelquechose', component: RouterParamComponent, canDeactivate: [] },
      { path: 'ex1', component: Ex1Component },
      { path: 'ex2', component: Ex2Component },
      { path: 'merge', component: MergeComponent },
      { path: 'product', component: ProductComponent },
    ],
  },

  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
