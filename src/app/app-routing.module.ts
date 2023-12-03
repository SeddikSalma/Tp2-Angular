import { AddCvComponent } from './add-cv/add-cv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { RouterParamComponent } from './components/router-param/router-param.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from "./login/login.component";
import { Ex1Component } from "./ex1/ex1.component";
import { Ex2Component } from "./ex2/ex2.component";
import { loginGuard } from "./login/login.guard";
import { SpecificCvComponent } from "./cv/specific-cv/specific-cv.component";
import { MergeComponent } from "./merge/merge.component"
import { ProductComponent } from "./product/product.component"
import { cvsResolver } from './resolvers/cvs.resolver';
import { MasterComponentComponent } from './master-component/master-component.component';
import { specificCvResolver } from './resolvers/specific-cv.resolver';
import { CanDeactivateGuard } from './add-cv/can-deactivate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: 'cv',
        component: CvComponent,
        resolve: { cvs: cvsResolver },
        children: [

          {
            path: 'list',
            children: [
              {
                path: '',
                component: MasterComponentComponent,
              },
              {
                path: ':id',
                component: SpecificCvComponent,
                resolve: {
                  cv: specificCvResolver
                }
              }
            ]
          },
        ]
      },
      {
        path: 'cv/:id', component: SpecificCvComponent, resolve: {
          cv: specificCvResolver
        }
      },


      { path: 'route/:quelquechose', component: RouterParamComponent,canDeactivate:[] },
      { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
      { path: 'ex1', component: Ex1Component },
      { path: 'ex2', component: Ex2Component },
      { path: 'merge', component: MergeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'add', component: AddCvComponent,canDeactivate:[CanDeactivateGuard] },

    ],
  },

  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
