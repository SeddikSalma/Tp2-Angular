import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cvsResolver } from './resolvers/cvs.resolver';
import { specificCvResolver } from './resolvers/specific-cv.resolver';
import { CvComponent } from './cv/cv.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { SpecificCvComponent } from './specific-cv/specific-cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CanDeactivateGuard } from './add-cv/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
    resolve: { cvs: cvsResolver },
  },
  { path: 'add', component: AddCvComponent, canDeactivate: [CanDeactivateGuard] },
  {
    path: 'list',
    component: MasterComponentComponent,
    resolve: { cvs: cvsResolver },
    children: [
      {
        path: ':id',
        component: SpecificCvComponent,
        resolve: {
          cv: specificCvResolver
        }
      }
    ]
  },
  {
    path: ':id', component: SpecificCvComponent, resolve: {
      cv: specificCvResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvCleanRoutingModule { }
